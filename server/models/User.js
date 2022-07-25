const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
          },
          password: {
            type: String,
            required: true,
            minlength: 4
          },
    }
);
const User = model('User', userSchema )
module.exports = {User}