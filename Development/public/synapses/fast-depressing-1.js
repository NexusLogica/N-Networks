N.ConnectionTemplate(
  {},
  function(context, from, to) {
    var connection = {
      className: 'N.Connection',
      name: 'FD',
      description: 'Fast depressing synapse inibitory synapse - logic equivalent 1.0',
      reference: 'https://www.evernote.com/shard/s211/nl/22441192/f0c99229-3113-499d-a2e5-cc461a5646a8/',
      path: from + '->' + to,
      threshold: 20.0, // nominally mV
      previousActivationStart: -100, // ms
      previousActivationEnd: -25, // ms
      gainDropOff: 10.0/25.0, // 10mv/25ms
      gainMin: 3.0, // minimum gain
      gainDropOffTime: 15, // ms
      minimumOffTime: 10, // ms - time with input below threshold before synapse 'resets'
      active: false,
      delay: 1, // ms
      update: function(time) {
        var current = this.source.getOutputAt(time-this.delay);
        if(this.active) {
          if(current < this.threshold) {
            this.previousActivationEnd = time;
            this.active = false;
            this.output = 0.0;
          } else {
            // The function for determining output.
            this.output = current*(
              (this.gainDropOff*this.gainDropOffTime-this.gainMin)*(time-this.previousActivationStart)
              +this.gainMin);
          }
        } else {
          if(current >= this.threshold) {
            this.previousActivationStart = time;
            this.output = this.gainDropOff*this.gainDropOffTime*this.gainMin*current;
          }
        }

        this.outputStore.appendData(time, this.output);
      }

    };
    context.self.connections = context.self.connections || [];
    context.self.connections.push(connection);
  }
);
