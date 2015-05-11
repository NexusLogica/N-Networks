N.Template(
  {
    "pyr": "/neurons/pyramidal-1.js",
    "syn-excitatory": "/synapses/excitatory-1.js",
    "display-include3": "/networks/layer-3/layer-3-display.json"
  },
  function(context, name) {
    var network = {
      "className": 'N.Network',
      "name": name || "L3",
      "description": "Layer 3 cortical network",
      "include": [{
          "target": "display",
          "template": "display-include3"
      }],
      "build": [
        { template: "pyr", args: ['PYR', 2] },
        { template: "syn-excitatory", args: [ ':PYR[0]>OP', ':PYR[1]>PBI' ] }
      ]
    };

    var networkContext =  { compiler: context.compiler, loadedImports: context.loadedImports, imports: context.imports, root: context.root, self: network };
    context.compiler.buildOut(networkContext);

    context.self.networks = context.self.networks || [];
    context.self.networks.push(network);
  }
);
