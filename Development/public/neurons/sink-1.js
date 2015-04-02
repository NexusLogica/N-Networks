N.Template(
  {},
  function(context) {
    var neuron = {
      className: 'N.Neuron',
      name: 'SNK',
      description: 'Simple sink neuron - logic equivalent',
      compartments: [{
        className: 'N.Comp.OutputSink',
        name: 'IP',
        update: function(time) {
          this.outputStore.appendData(time, this.output);
          return this.output;
        }
      }]
    };

    context.self.neurons = context.self.neurons || [];
    context.self.neurons.push(neuron);
  }
);