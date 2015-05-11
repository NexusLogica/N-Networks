N.ConnectionTemplate({},
  function(context, from, to) {
    var connection = {
      className: 'N.Connection',
      name: 'FD',
      description: 'Fast depressing synapse inibitory synapse - logic equivalent 1.0',
      reference: 'https://www.evernote.com/shard/s211/nl/22441192/f0c99229-3113-499d-a2e5-cc461a5646a8/',
      path: from + '->' + to,
      threshold: 2.0, // nominally mV
      activationStart: -100, // ms
      gainVarying: 10.0, // 10mv/25ms
      gainConstant: 3.0, // minimum gain
      timeConstant: 0.87055057, // drop off rate per ms. 0.87055057 is 10 ms half life
      active: false,
      delay: 1, // ms
      update: function(time) {
        var input = this.source.getOutputAt(time-this.delay);
        if(this.active) {
          if(input < this.threshold) {
            this.active = false;
            this.output = 0.0;
          } else {
            // The function for determining output.
            this.output = (this.gainVarying*Math.pow(this.timeConstant, time-this.activationStart)+this.gainConstant)*(input-this.threshold);
          }
        } else {
          if(input >= this.threshold) {
            this.activationStart = time;
            this.output = (this.gainVarying+this.gainConstant)*(input-this.threshold);
            this.active = true;
          }
        }

        this.outputStore.appendData(time, this.output);
      }

    };
    context.self.connections = context.self.connections || [];
    context.self.connections.push(connection);
  }
);
