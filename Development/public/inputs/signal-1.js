N.Template(
  {},
  function(context, name, target, signal) {
    var input = {
      name: name,
      className: 'N.Input',
      description: 'Input source - logic equivalent',
      target: target,
      signal: signal
    };

    context.self.inputs = context.self.inputs || [];
    context.self.inputs.push(input);
  }
);