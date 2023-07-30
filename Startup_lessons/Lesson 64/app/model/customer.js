// customer.js
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: String,
  product_id: { type: Schema.Types.ObjectId, ref: 'product' } // Corrected reference field name
});

const Customer = mongoose.model('customer', customerSchema);

export { Customer };
