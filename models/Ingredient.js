const { Schema, model } = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");

const IngredientSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: String,
    image: String,
  },
  { timestamps: true }
);

IngredientSchema.plugin(URLSlugs("name"));
module.exports = model("Ingredient", IngredientSchema);
