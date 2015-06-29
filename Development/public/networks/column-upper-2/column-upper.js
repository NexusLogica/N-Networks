
N.Mod.Column = function(context) {

  var getDependencies = function() {
    return [
      '/networks/column-upper-2/layer-1.js',
      '/networks/column-upper-2/layer-3.js',
      '/networks/column-upper-2/layer-4.js',
      '/neurons/fast-spiking-1.js',
      '/neurons/low-threshold-1.js',
      '/neurons/pyramidal-1.js',
      '/neurons/stellate-1.js',
      '/synapses/excitatory-1.js'];
  };

  var create = function(name) {
    var column = context.createEmptyNetwork(name || 'COL');
    column.displaySource = '/networks/column-upper-2/column-upper.display.json';
    var l1 = context.makeModule("N.Mod.Layer1");
    column.networks.push(l1.create());
    var l3 = context.makeModule("N.Mod.Layer3");
    column.networks.push(l3.create());
    var l4 = context.makeModule("N.Mod.Layer4");
    column.networks.push(l4.create());

    // Connections
    var excitatory = context.makeModule('N.Mod.Synapse.Excitatory');
    var connection = excitatory.create('L1:FS[0]>OP', 'L3:PYR[1]>ATI', 'Spine');
    column.connections.push(connection);

    return column;
  };

  return {
    getDependencies: getDependencies,
    create: create
  }
};
