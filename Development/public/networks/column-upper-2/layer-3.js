// Create a new layer 1 network.
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
//    { template: "syn-excitatory", args: [ ':PYR[0]>OP', ':PYR[1]>PBI', { category: 'Spine' } ] }
    return network;
  };

  return {
    create: create
  }
};
