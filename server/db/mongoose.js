var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://yaswanthmarolix:9XHYGlrf4G3WfWSi@cluster0.aqggq89.mongodb.net/?retryWrites=true&w=majority");

module.exports = {mongoose};
