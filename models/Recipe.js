const { Schema, model } = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");

const RecipeSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: String,
    image: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    ingredients: [
      {
        type: Schema.Types.ObjectId,
        ref: "Ingredient",
      },
    ],
  },
  { timestamps: true }
);

RecipeSchema.plugin(URLSlugs("name"));
module.exports = model("Recipe", RecipeSchema);
