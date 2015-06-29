// Create a new layer 3 network.
N.Mod.Layer3 = function(context) {

  var create = function(name) {
    var numPyr = 6;
    var j;

    var network = context.createEmptyNetwork(name || "L3");
    network.displaySource = '/networks/column-upper-2/layer-3.display.json';

    var pyrMod = context.makeModule('N.Mod.Pyramidal');
    for(var i=0; i<numPyr; i++) {
      var pyr = pyrMod.create('PYR['+i+']');
      network.neurons.push(pyr);
    }

    var fsMod = context.makeModule('N.Mod.FastSpiking');
    for(i=0; i<2; i++) {
      var fs = fsMod.create('FS['+i+']');
      network.neurons.push(fs);
    }

    var ltsMod = context.makeModule('N.Mod.LowThresholdSpiking');
    for(i=0; i<2; i++) {
      var lts = ltsMod.create('LTS['+i+']');
      network.neurons.push(lts);
    }

    // Connect them.
    var excitatory = context.makeModule('N.Mod.Synapse.Excitatory');
    for(i=0; i<numPyr; i++) {
      for(j=0; j<numPyr; j++) {
        if (i !== j) {
          var connection = excitatory.create(':PYR[' + i + ']>OP', ':PYR[' + j + ']>PBI', 'Spine');
          network.connections.push(connection);
        }
      }
    }

    return network;
  };

  return {
    create: create
  }
};
