import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  previewImages: [{ type: String }],
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  tags: [{ type: String }],
  downloadUrl: { type: String, required: true },
  isFeatured: { type: Boolean, default: false },
  rating: { type: Number, default: 5 },
  reviewsCount: { type: Number, default: 0 },
  features: [{ type: String }],
  faqs: [{
    question: String,
    answer: String
  }]
}, { timestamps: true });

export const Product = models.Product || model("Product", ProductSchema);
