N.Template(
  {
    "rs": "/neurons/stellate-1.js",
    "pyr": "/neurons/pyramidal-1.js",
    "display-include": "/networks/layer-4/layer-4-display.json"
  },
  function(context) {
    var config = {
      "className": 'N.Network',
      "name": "LAYER-4",
      "description": "Layer 4 cortical network",
      "include": [{
          "target": "display",
          "template": "display-include"
      }],
      "build": [
        { template: "rs", args: ['RS'] },
        { template: "pyr", args: ['PYR'] }
      ]
    };

    _.merge(context.self, config);

    context.compiler.buildOut(context);
  }
);
