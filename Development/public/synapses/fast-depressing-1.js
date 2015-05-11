N.ConnectionTemplate({},
  function(context, from, to) {
    var connection = {
      className: 'N.Connection',
      name: 'EX',
      description: 'Simple linear excitatory synapse - logic equivalent 1.0',
      reference: 'https://www.evernote.com/shard/s211/nl/22441192/8e3448ce-b420-4b41-8785-b47dff1ddd31/',
      path: from + '->' + to,
      gainConstant: 3.0, // minimum gain
      delay: 1, // ms
      update: function(time) {
        var input = this.source.getOutputAt(time-this.delay);
        this.output = input*this.gainConstant;
        this.outputStore.appendData(time, this.output);
      }

    };
    context.self.connections = context.self.connections || [];
    context.self.connections.push(connection);
  }
);
