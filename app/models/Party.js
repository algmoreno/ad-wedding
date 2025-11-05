import { Schema, model, models } from 'mongoose';

const partySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  startDatetime: { type: Date, required: true, unique: true },
  endDatetime: { type: Date, required: true, unique: true },
  service: { type: String, required: true },
  price: { type: Number, required: true }
})

const Party = models.Party || model("Party", partySchema);

export default Party