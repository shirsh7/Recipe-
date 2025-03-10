const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    imageUrl: { type: String, required: false },
    cookingTime: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Recipe", RecipeSchema);
