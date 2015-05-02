# name: Make a directory
pwd
ls
mkdir  /scripts/test
edit test1.js
run /synapses/unit-tests/fast-depressing-1-test-system.js /synapses/unit-tests/fast-depressing-1-unit-test-1.js $out
view $out.system.network.sourceConfiguration
view $out.system
view $out
