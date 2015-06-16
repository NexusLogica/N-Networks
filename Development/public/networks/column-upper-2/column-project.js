var Nx = Nx || {};

Nx.Column = function() {

  var getDependencies = function() {
    return [];
  };

  var create = function(context) {
    var column = context.createEmptyNetwork(name);
    var l1 = context.make("layer1");
    column.networks.push(l1.create());
    return column;
  };

  return {
    getDependencies: getDependencies,
    create: create
  }
};
