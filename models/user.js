const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const { schema } = require("./review");
const { required } = require("joi");

const userShema = new Schema ({
    email: {
        type: String,
        required: true,
    },
});

userShema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userShema);