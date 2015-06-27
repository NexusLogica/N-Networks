N.Mod.Synapse.Excitatory = function(context) {

  var create = function(source, sink, gain) {
    var connection = context.createEmptyConnection(source, sink, 'Excitatory');
    connection.description = 'Fast depressing synapse inibitory synapse - logic equivalent 1.0';
    connection.reference = 'https://www.evernote.com/shard/s211/nl/22441192/f0c99229-3113-499d-a2e5-cc461a5646a8/';
    connection.gain = _.isUndefined(gain) ? 1.0 : gain;

    return connection;
  };

  return {
    create: create
  }
};
