import { Schema, model, models } from 'mongoose';

const partySchema = new Schema({
  rsvpId: { type: String, required: true },
  fridayInvite: { type: Boolean, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: "Member" }],
})

const Party = models.Party || model("Party", partySchema);

export default Party