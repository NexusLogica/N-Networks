N.Mod.Synapse.Excitatory = function(context) {

  var create = function(source, sink, gain) {
    var connection = context.createEmptyConnection(source, sink, 'Spine');
    connection.description = 'Excitatory synapse - logic equivalent 1.0';
    connection.reference = '';
    connection.gain = _.isUndefined(gain) ? 1.0 : gain;

    return connection;
  };

  return {
    create: create
  }
};
