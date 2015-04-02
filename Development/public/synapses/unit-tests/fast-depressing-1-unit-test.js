N.Template(
  {
    "source": "/neurons/source-1.js",
    "fast-depressing": "/synapses/fast-depressing-1.js",
    "sink": "/neurons/sink-1.js"
  },
  function(context) {
    var config = {
      "className": 'N.Network',
      "name": "SYN-TEST",
      "description": "Fast depressing inhibitory synapse test network",
      "build": [
        { template: "source", args: ['SRC'] },
        { template: "sink", args: ['SNK'] },
        { template: "fast-depressing", args: [ ':SRC>OP', ':SNK>IP' ] },
      ]
    };

    _.merge(context.self, config);

    context.compiler.buildOut(context);
  }
);
