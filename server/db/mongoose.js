var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Change the database connection URL with yours
mailto:mongoose.connect("mongodb+srv://suneetha536marolix:gitze3rlvmvopam4@cluster0.mnv4bve.mongodb.net/?retryWrites=true&w=majority");

module.exports = { mongoose };
