N.Mod.Synapse.FastInhibitory = function(context) {

  var create = function(source, sink, gain) {
    var connection = context.createEmptyConnection(source, sink, 'FastInhibitory');
    connection.description = 'Fast depressing inhibitory synapse - logic equivalent 1.0';
    connection.reference = 'https://www.evernote.com/shard/s211/nl/22441192/8e3448ce-b420-4b41-8785-b47dff1ddd31/';
    connection.gainConstant = _.isUndefined(gain) ? 3.0 : gain;
    connection.delay = 1; // ms
    connection.update = function(time) {
      var input = this.source.getOutputAt(time-this.delay);
      this.output = input*this.gainConstant;
      this.outputStore.appendData(time, this.output);
    };

    return connection;
  };

  return {
    create: create
  }
};
