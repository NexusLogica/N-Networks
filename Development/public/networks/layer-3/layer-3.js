N.Template(
  {
    "pyr": "/neurons/pyramidal-1.js",
    "display-include": "/networks/layer-3/layer-3-display.json"
  },
  function(context) {
    var network = {
      "className": 'N.Network',
      "name": "LAYER-3",
      "description": "Layer 3 cortical network",
      "include": [{
          "target": "display",
          "template": "display-include"
      }],
      "build": [
        { template: "pyr", args: ['PYR', 2] }
      ]
    };

    var networkContext = { compiler: context.compiler, imports: context.imports, root: context.root, self: network };
    context.compiler.buildOut(networkContext);

    context.self.networks = context.self.networks || [];
    context.self.networks.push(network);
  }
);
