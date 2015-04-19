N.Template({},
  function(context, src, sink) {
    var display = {
      className: 'N.UI.PiNetwork',
      width: 1.0,
      height: 2.5,
      neurons: [{
        name: src,
        x: 0.5,
        y: 0.75,
        radius: 0.39
      },{
        name: sink,
        x: 0.5,
        y: 1.75,
        radius: 0.35
      }],
      connections: [

      ],
      renderMappings: {
        'columnSpacing': 0.3,
        'rowSpacing': 0.3,
        'SS'  : { template: 'N.UI.StandardNeuronTemplates.Stellate',              radius: 0.3 },
        'IN'  : { template: 'N.UI.StandardNeuronTemplates.InhibitoryInterneuron', radius: 0.3 },
        'SRC' : { template: 'N.UI.StandardNeuronTemplates.InputSource',           radius: 0.2 },
        'IP'  : { template: 'N.UI.StandardNeuronTemplates.InputSource',           radius: 0.2 },
        'SNK' : { template: 'N.UI.StandardNeuronTemplates.OutputSink',            radius: 0.2 },
        'OP'  : { template: 'N.UI.StandardNeuronTemplates.OutputSink',            radius: 0.2 },
        'RN'  : { template: 'N.UI.StandardNeuronTemplates.ExcitatoryInterneuron', radius: 0.3 },
        'Default' :  { template: 'N.UI.StandardNeuronTemplates.ExcitatoryInterneuron', radius: 0.2 }
      }
    };
    context.self.display = display;
  }
);
