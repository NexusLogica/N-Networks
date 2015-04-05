N.Template(
  {
    "input": "/inputs/signal-1.js",
    "output": "/outputs/output-1.js"
  },
  function(context) {
    var config = {
      "className": 'N.System',
      "name": "FS-SYN-1-TEST-1",
      "description": "Fast depressing inhibitory synapse 1 test system 1",
      "startTime": 0,
      "endTime": 100, // a tenth of a second
      "build": [
        { template: "input", args: ['IN', '/:SRC>OP', [[0, 0.0], [10, 5.0], [40, 0.0] ]] },
        { template: "output", args: ['OUT', '/:SNK>IP'] }
      ]
    };

    _.merge(context.self, config);

    context.compiler.buildOut(context);
  }
);
