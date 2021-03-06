const { Schema, model } = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");

const CategorySchema = new Schema(
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

CategorySchema.plugin(URLSlugs("name"));
module.exports = model("Category", CategorySchema);
