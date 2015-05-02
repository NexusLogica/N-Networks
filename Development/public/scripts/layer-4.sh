# name: Depressing synapse work bench
# description: This is a test network for a synapse whose response is initially
# description: very strong but rapidly depresses to a low gain. This is typically seen
# description: leading to and coming from fast spiking cortical neurons.
run /networks/layer-4/systems/layer-4-main.js $out
view $out.system
view $out
view $out.system.network.sourceConfiguration
