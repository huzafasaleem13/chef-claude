import React from "react";
function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredients) => (
    <li key={ingredients}>{ingredients}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  return (
    <main>
      <div className="form-container">
        <form action={addIngredient} className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button>Add Ingredient</button>
        </form>

        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-lists" aria-live="polite">
            {ingredientsListItems}
          </ul>
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>generate a recipe from your list of ingredients.</p>
            </div>
            <button>Get a recipe</button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
