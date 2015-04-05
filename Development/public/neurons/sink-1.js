N.Template(
  {},
  function(context) {
    var neuron = {
      className: 'N.Neuron',
      name: 'SNK',
      description: 'Simple sink neuron - logic equivalent',
      compartments: [{
        className: 'N.Comp.OutputSink',
        name: 'IP'
      }]
    };

    context.self.neurons = context.self.neurons || [];
    context.self.neurons.push(neuron);
  }
);