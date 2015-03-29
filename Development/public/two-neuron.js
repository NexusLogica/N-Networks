N.Template(
  { "fast-spiking": "/neurons/fast-spiking-1.js"  },
  function(root, self, imports, compiler) {
    var config = {
      "className": 'N.Network',
      "name": "Hello World",
      "build": [ { id: "fast-spiking", args: [] } ]
    };

    _.merge(self, config);

    compiler.buildOut(root, self, imports);
  }
);