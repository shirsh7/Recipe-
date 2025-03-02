import React, { useState } from "react";
import "./CreateRecipe.css"; // Ensure you have a CSS file for styling

const CreateRecipe = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [cookingTime, setCookingTime] = useState(0);

  const addIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeData = { name, description, ingredients, instructions, imageUrl, cookingTime };
    console.log("Recipe Submitted:", recipeData);
    // If using an API, send the data via fetch or Axios
  };

  return (
    <div className="create-recipe-container">
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Ingredients</label>
        <div className="ingredient-section">
          <input
            type="text"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            placeholder="Enter ingredient"
          />
          <button type="button" className="add-btn" onClick={addIngredient}>
            Add Ingredient
          </button>
        </div>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <label>Instructions</label>
        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />

        <label>Image URL</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

        <label>Cooking Time (minutes)</label>
        <input type="number" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} min="0" />

        <button type="submit" className="submit-btn">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
