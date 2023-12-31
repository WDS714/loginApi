const mongoose = require("mongoose");

const uri = "mongodb+srv://WDS714:<password>@cluster0.bfct1lh.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conecto con base de datos"))
.catch(err => console.log("Error de conexion con la base de datos", err));

const userSchema = new mongoose.Schema({

    username: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    picture: {type:String},
    role: {type:String, default:"user"}
});

module.exports = mongoose.model('Usuarios', userSchema);
