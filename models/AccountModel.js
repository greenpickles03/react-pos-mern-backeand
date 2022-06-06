import mongoose from "mongoose";

const Accounts = mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    accountStatus: {
        type: String,
        required: true
    }
});

export default mongoose.model('Accounts', Accounts);