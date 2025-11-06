import { Schema, model, models } from 'mongoose';

const memberSchema = new Schema({
  party: { type: Schema.Types.ObjectId, ref: "Party" },
  firstName: {type: String, required: true },
  lastName: {type: String, required: true },
  dietaryRestrictions: {type: String, required: false },
})

const Member = models.Member || model("Member", memberSchema);

export default Member