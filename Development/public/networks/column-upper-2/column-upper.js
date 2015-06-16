
N.Mod.Column = function(context) {

  var getDependencies = function() {
    return ['/networks/column-upper-2/layer-1.js'];
  };

  var create = function(name) {
    var column = context.createEmptyNetwork(name || 'COL');
    var l1 = context.makeModule("N.Mod.Layer1");
    column.networks.push(l1.create());
    return column;
  };

  return {
    getDependencies: getDependencies,
    create: create
  }
};
