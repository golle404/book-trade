import mongoose, {Schema} from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

let Account = new Schema({
  username: String,
  password: String,
  email: String,
  country: String,
  city: String
});

Account.plugin(passportLocalMongoose);
// create the model for users and expose it to our app
export default mongoose.model("Account", Account);
