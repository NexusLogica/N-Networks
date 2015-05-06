N.Template(
  {
    "rs": "/neurons/stellate-1.js",
    "pyr": "/neurons/pyramidal-1.js",
    "display-include4": "/networks/layer-4/layer-4-display.json"
  },
  function(context, name) {
    var network = {
      "className": 'N.Network',
      "name": name || "L4",
      "description": "Layer 4 cortical network",
      "include": [{
          "target": "display",
          "template": "display-include4"
      }],
      "build": [
        { template: "rs", args: ['RS', 2] },
        { template: "pyr", args: ['PYR'] }
      ]
    };

    var networkContext =  { compiler: context.compiler, loadedImports: context.loadedImports, imports: context.imports, root: context.root, self: network };
    context.compiler.buildOut(networkContext);

    context.self.networks = context.self.networks || [];
    context.self.networks.push(network);
  }
);
