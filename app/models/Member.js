import { Schema, model, models } from 'mongoose';

const memberSchema = new Schema({
  party: { type: Schema.Types.ObjectId, ref: "Party" },
  firstName: {type: String, required: true },
  lastName: {type: String, required: false },
  dietaryRestrictions: {type: String, required: false },
  attendingFriday: {type: Boolean, required: false },
  attendingCeremony: {type: Boolean, required: false },
  attendingReception: {type: Boolean, required: false },
})

const Member = models.Member || model("Member", memberSchema);

export default Member