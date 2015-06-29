N.Mod.StellateRegularSpiking = function(context) {

  var create = function(name) {
    var neuron = context.createEmptyNeuron(name || "RS");
    neuron.description = 'Regular spiking stellate neuron - logic equivalent';
    neuron.displaySource = '/neurons/stellate-1.display.json';

    neuron.compartments.push({
      className: 'N.Comp.LinearSummingInput',
      name: 'IP'
    });

    neuron.compartments.push({
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
    });

    return neuron;
  };

  return {
    create: create
  }
};
