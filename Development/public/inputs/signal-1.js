N.Template(
  {},
  function(context, name, target, signalPoints) {
    var input = {
      name: name,
      className: 'N.Input',
      description: 'Input source - logic equivalent',
      target: target,
      signalPoints: signalPoints
    };

    context.self.inputs = context.self.inputs || [];
    context.self.inputs.push(input);
  }
);