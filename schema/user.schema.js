const mongoose = require('./db.js');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: {
        type: String,
        require: true,
        lowercase: true,
        trim: true
    },
    lname: {
        type: String,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        email: true,
        trim: true
    },

    mobile: {

        number: { type: String, trim: true, required: false },

        internationalNumber: { type: String, trim: true, required: false },

        nationalNumber: { type: String, trim: true, required: false },

        e164Number: { type: String, trim: true, required: false },

        countryCode: { type: String, trim: true, required: false },

        dialCode: { type: String, trim: true, required: false }

    },

    address:
        [
            {
                house_no: { type: String, require: true, lowercase: true, trim: true },
                street: { type: String, require: true, lowercase: true, trim: true },
                city: { type: String, require: true, lowercase: true, trim: true },
                pin: { type: String, require: true, trim: true },
            }],

})
is_active:
{
    type: Boolean,
    default:true,
    require: true
}

let User = mongoose.model('user', userSchema);

module.exports = User;