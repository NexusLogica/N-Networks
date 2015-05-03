N.Template(
  {
    "l4": "/networks/layer-4/layer-4.js",
    "l3": "/networks/layer-3/layer-3.js",
    "display-include": "/networks/layers-3-4/layers-3-4-display.json"
  },
  function(context) {
    var config = {
      "className": 'N.Network',
      "name": "LAYER-3-4",
      "description": "Layers 3 and 4 cortical network",
      "include": [{
          "target": "display",
          "template": "display-include"
      }],
      "build": [
        { template: "l4", args: ['LAYER-4'] },
        { template: "l3", args: ['LAYER-3'] }
      ]
    };

    _.merge(context.self, config);

    context.compiler.buildOut(context);
  }
);
