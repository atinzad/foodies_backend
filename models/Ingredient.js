const { Schema, model } = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");

const IngredientSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: String,
    image: String,
    recipes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Recipe",
      },
    ],
  },
  { timestamps: true }
);

IngredientSchema.plugin(URLSlugs("name"));
module.exports = model("Ingredient", IngredientSchema);
