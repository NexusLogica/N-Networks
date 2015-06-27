// Create a new layer 3 network.
N.Mod.Layer3 = function(context) {

  var create = function(name) {
    var network = context.createEmptyNetwork(name || "L3");
    network.displaySource = '/networks/column-upper-2/layer-3.display.json';

    var pyrMod = context.makeModule('N.Mod.Pyramidal');
    for(var i=0; i<5; i++) {
      var pyr = pyrMod.create('PYR['+i+']');
      network.neurons.push(pyr);
    }

    // Connect them.
    var excitatory = context.makeModule('N.Mod.Synapse.Excitatory');
    var connection = excitatory.create(':PYR[0]>OP', ':PYR[1]>PBI', 'Spine');
    network.connections.push(connection);

    return network;
  };

  return {
    create: create
  }
};
