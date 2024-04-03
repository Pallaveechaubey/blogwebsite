import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required :true,
        unique:true,
    },

    email:{
        type:String,
        require:true,
        unique:true,
    },

    password:{
        type:String,
        require:true,
    },


}, {timestamps:true}); //save time of creation and time of update

const User = mongoose.Model("User", userSchema);

export default User;