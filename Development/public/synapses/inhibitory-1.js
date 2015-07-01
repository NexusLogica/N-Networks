N.Mod.Synapse.Inhibitory = function(context) {

  var create = function(source, sink, gain) {
    var connection = context.createEmptyConnection(source, sink, 'Inhibitory');
    connection.description = 'Regular spiking inhibitory synapse - logic equivalent 1.0';
    connection.reference = '';
    connection.gain = _.isUndefined(gain) ? 1.0 : gain;

    return connection;
  };

  return {
    create: create
  }
};
