const tests  = new Map();
tests.set(() => 2+2, 4);
tests.set(() => 2*2, 4);
tests.set(() => 2/2, 1);
for(const entry of tests){
    //console.log(entry)
    console.log(entry[0]())
}