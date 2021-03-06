// Create a new layer 1 network.
N.Mod.Layer1 = function(context) {

  var create = function(name) {
    var network = context.createEmptyNetwork(name || "L1");
    network.displaySource = '/networks/column-upper-2/layer-1.display.json';

    var fsMod = context.makeModule('N.Mod.FastSpiking');
    for(var i=0; i<2; i++) {
      var fs = fsMod.create('FS['+i+']');
      network.neurons.push(fs);
    }

    var ltsMod = context.makeModule('N.Mod.LowThresholdSpiking');
    for(i=0; i<2; i++) {
      var lts = ltsMod.create('LTS['+i+']');
      network.neurons.push(lts);
    }

    return network;
  };

  return {
    create: create
  }
};
