import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    title: String,
    age: Number,
    status: String,
    link: String,
})

const User = mongoose.model('user', userSchema);

export {User};