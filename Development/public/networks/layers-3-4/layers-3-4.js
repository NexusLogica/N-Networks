N.Template(
  {
    "l4": "/networks/layer-4/layer-4.js",
    "l3": "/networks/layer-3/layer-3.js",
    "syn-excitatory": "/synapses/excitatory-1.js",
    "display-include": "/networks/layers-3-4/layers-3-4-display.json"
  },
  function(context, name) {
    var config = {
      "className": 'N.Network',
      "name": name || "LAYER-3-4",
      "description": "Layers 3 and 4 cortical network",
      "include": [{
          "target": "display",
          "template": "display-include"
      }],
      "build": [
        { template: "l4", args: ['L4'] },
        { template: "l3", args: ['L3'] },
        { template: "syn-excitatory", args: [ 'L4:RS[0]>OP', 'L3:PYR[1]>ATI', { category: 'Excitatory' } ] }
      ]
    };

    _.merge(context.self, config);

    context.compiler.buildOut(context);
  }
);
