N.Template(
  {
    "pyr": "/neurons/pyramidal-1.js",
    "display-include": "/networks/layer-3/layer-3-display.json"
  },
  function(context) {
    var config = {
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

    _.merge(context.self, config);

    context.compiler.buildOut(context);
  }
);
