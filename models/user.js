const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String, trim: true, required: true },
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  phoneNumber: { type: String, trim: true, required: true },
  location: { type: String, trim: true, required: true },
  isManager: { type: Boolean, required: true },
  shifts: [
    {
      type: String
    }
  ],
  pendingShifts: [
    {
      type: String
    }
  ],
  teamId: { type: String, required: true }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);
