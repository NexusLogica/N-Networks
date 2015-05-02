N.Template(
  {},
  function(context) {
    var neuron = {
      className: 'N.Neuron',
      name: 'PYR',
      description: 'A pyramidal neuron - logic equivalent',
      compartments: [{
        className: 'N.Comp.LinearSummingInput',
        name: 'IP',
        update: function(time) {
          this.outputStore.appendData(time, this.output);
          return this.output;
        }
      },{
        className: 'N.Comp.Output',
        name: 'OP',
        threshold: -50.0,
        resting: -70.0,
        outputRateFromInputVoltage: 50.0,
        maxOutputRate: 50.0,
        output: function() {
          var output = 0.0;
          var over = this.input+this.resting;
          if(over > this.threshold) {
            output = over*this.outputRateFromInputVoltage;
            if(output > this.maxOutputRate) {
              output = this.maxOutputRate;
            }
          }
        }
      }]
    };
    context.self.neurons = context.self.neurons || [];
    context.self.neurons.push(neuron);
  }
);