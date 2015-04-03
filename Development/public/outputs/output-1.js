N.Template(
  {},
  function(context, name, target, signalPoints) {
    var output = {
      name: name,
      className: 'N.Output',
      description: 'Simple sink neuron - logic equivalent',
      target: target,
      signalPoints: signalPoints
    };

    context.self.outputs = context.self.outputs || [];
    context.self.outputs.push(output);
  }
);