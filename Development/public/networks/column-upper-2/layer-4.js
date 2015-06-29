// Create a new layer 4 network.
N.Mod.Layer4 = function(context) {

  var create = function(name) {
    var network = context.createEmptyNetwork(name || "L4");
    network.displaySource = '/networks/column-upper-2/layer-4.display.json';

    var rsMod = context.makeModule('N.Mod.StellateRegularSpiking');
    for(var i=0; i<7; i++) {
      var rs = rsMod.create('RS['+i+']');
      network.neurons.push(rs);
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
    //var excitatory = context.makeModule('N.Mod.Synapse.Excitatory');
    //var connection = excitatory.create(':PYR[0]>OP', ':PYR[1]>PBI', 'Spine');
    //network.connections.push(connection);

    return network;
  };

  return {
    create: create
  }
};
