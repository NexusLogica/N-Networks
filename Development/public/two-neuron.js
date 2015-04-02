N.Template(
  {
    "fast-spiking": "/neurons/fast-spiking-1.js"
  },
  function(root, self, imports, compiler) {
    var config = {
      "className": 'N.Network',
      "name": "Hello World",
      "build": [ { template: "fast-spiking", args: [] } ]
    };

    _.merge(self, config);

    compiler.buildOut({ root: root, self: self, imports: imports });
  }
);