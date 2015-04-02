N.Template(
  {},
  function(root, self, imports, compiler) {
    self.neurons = self.neurons || [];
    var neuron = {
      className: 'N.Neuron',
      name: 'FS',
      description: 'Fast spiking inhibitory neuron - logic equivalent',
      compartments: [{
        className: 'N.Comp.LinearSummingInput',
        name: 'IP'
      }, {
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
    self.neurons.push(neuron);
  }
);