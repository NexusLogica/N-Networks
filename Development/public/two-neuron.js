N.Template(
  { "add-neurons": "/neurons/add-simple.js"  },
  function(root, self, imports, compiler) {
    var config = {
      "className": 'N.Network',
      "name": "Hello World",
      "build": [ { id: "add-neurons", args: [] } ]
    };

    _.merge(self, config);

    compiler.buildOut(root, self, imports);
  }
);