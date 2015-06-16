// Create a new layer 1 network.
N.Mod.Layer1 = function(context) {

  var create = function() {
    var network = context.createEmptyNetwork("L1");
    return network;
  };

  return {
    create: create
  }
};
