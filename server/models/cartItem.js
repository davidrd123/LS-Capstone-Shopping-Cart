const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = Schema.Types;

const CartItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
    },
    productId: {
      type: ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);

CartItemSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const CartItem = mongoose.model("cartItem", CartItemSchema);

module.exports = CartItem;
