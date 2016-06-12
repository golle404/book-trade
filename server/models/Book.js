import mongoose, {Schema} from 'mongoose';

let Book = new Schema({
  title: String,
  author: String,
  ownerId: String,
  requested: {type: String, default: ""},
  approved: {type: Boolean, default: false}
});


export default mongoose.model("Book", Book);
