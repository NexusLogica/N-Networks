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

    context.self.inputs = context.self.inputs || [];
    context.self.inputs.push(output);
  }
);