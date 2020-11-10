const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://test:test@47.99.44.27:27017/?authSource=test', { 
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 50000},
    function(err){
        console.log("err:"+err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
    console.log("connected!!!");
})

const kittySchema = mongoose.Schema({
    name:String
});

kittySchema.methods.speak = function(){
    const greeting = this.name
        ? "meow name is " + this.name
        :"I don't have a name";
    console.log(greeting);
}

const Kitten = mongoose.model('Kitten',kittySchema);

//write data
// for (let index = 0; index < 4; index++) {
//     let indexelement = new Kitten({name:index});
//     indexelement.save(function(err,indexelement) {
//         if (err) console.log(err);
//         indexelement.speak();
//     })
// }

//find data
Kitten.find(function(err,kittens){
    if (err) console.log(err);
    console.log(kittens);
})

//



