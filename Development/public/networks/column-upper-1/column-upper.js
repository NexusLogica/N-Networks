N.Template(
  {
    "l1": "/networks/column-upper-1/layer-1.js",
    "l3": "/networks/column-upper-1/layer-3.js",
    "l4": "/networks/column-upper-1/layer-4.js",
    "excitatory": "/synapses/excitatory-1.js",
    "fast": "/synapses/fast-depressing-1.js",
    "slow": "/synapses/slow-facilitating-1.js",
    "display-include": "/networks/column-upper-1/column-upper-display.json"
  },
  function(context, name) {
    var config = {
      "className": 'N.Network',
      "name": name || "COLUMN-UPPER",
      "description": "Model of layers 1, 3, and 4 of a single cortical column.",
      "link": "http://nexuslogica.com/articles/column-upper-1",
      "include": [{
          "target": "display",
          "template": "display-include"
      }],
      "build": [
        { template: "l1", args: ['L1'] },
        { template: "l3", args: ['L3'] },
        { template: "l4", args: ['L4'] }
      ]
    };

    _.merge(context.self, config);

    context.compiler.buildOut(context);
  }
);
