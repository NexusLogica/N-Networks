N.Template(
  { "add-neurons": "/neurons/add-simple.js"  },
  function(root, self, imports, compiler) {
    var config = {
      "className": 'N.Network',
      "name": "Hello World"//,
      //"build": imports["add-neurons"]()
    };

    _.merge(self, config);
  }
);