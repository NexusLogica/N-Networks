N.Mod.Pyramidal = function(context) {

  var create = function(name) {
    var neuron = context.createEmptyNeuron(name || "PYR");
    neuron.description = 'A pyramidal neuron - logic equivalent';
    neuron.displaySource = '/neurons/pyramidal-1.display.json';
    neuron.compartments.push({
      className: 'N.Comp.LinearSummingInput',
      name: 'APTI',
      description: 'Proximal basal dendritic input compartment',
      update: function(time) {
        this.outputStore.appendData(time, this.output);
        return this.output;
      }
    });

    neuron.compartments.push({
      className: 'N.Comp.LinearSummingInput',
      name: 'ATI',
      description: 'Apical dendritic trunk input compartment',
      update: function(time) {
        this.outputStore.appendData(time, this.output);
        return this.output;
      }
    });

    neuron.compartments.push({
      className: 'N.Comp.LinearSummingInput',
      name: 'PBI',
      description: 'Proximal basal dendritic input compartment',
      update: function(time) {
        this.outputStore.appendData(time, this.output);
        return this.output;
      }
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
