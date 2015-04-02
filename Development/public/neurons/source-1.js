N.Template(
  {},
  function(context) {
    var neuron = {
      className: 'N.Neuron',
      name: 'SRC',
      description: 'Simple source neuron - logic equivalent',
      compartments: [{
        className: 'N.Comp.InputSource',
        name: 'OP',
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