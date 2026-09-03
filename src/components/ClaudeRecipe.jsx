function claudeRecipe() {
  return (
    <section>
      <h2>Chef Claude Recommends: </h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <p>
          Based on the ingredients you have available, I would recommend making
          a simple delicious <strong>Beef Bolognese Pasta</strong>. Here is the
          recipe:
        </p>
        <h3>Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul>
          <li>1 lb. ground beef</li>
          <li>i onion, diced</li>
          <li>3 cloves garlic, minced</li>
          <li>2 tablespoon tomato paste</li>
          <li>1 (28oz) can crushed tomato</li>
          <li>1 cup beef broth</li>
          <li>1 teaspoon dried oregano</li>
          <li>1 teaspoon dried basil</li>
          <li>Salt and pepper to taste</li>
          <li>8 oz pasta of your choice (e.g., spaghetti)</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
          <li>Bring a large pot of salted water to a boil for a pasta</li>
          <li>
            In a large skillet or Dutch oven, cook the ground beef over
            medium-high heat, breaking it up a wooden spoon, until brown and
            cooked through, about 5-7 minutes.
          </li>
          <li>
            Add the diced onion and minced garlic to the skillet and cook for
            2-3 minutes, until the onion is translucent.
          </li>
          <li>Stir in the tomato paste and cook for 1 minute.</li>
          <li>
            Add the crushed tomatoes, beef broth, oregano, and basil. Season
            with salt and pepper to taste.
          </li>
          <li>
            Reduce the heat to low and let the sauce simmer for 15-20 minutes,
            stirring occasionally, to allow the flavour to meld.
          </li>
          <li>
            While the sauce is simmering, cook the pasta according to a package
            instructions. Drain the pasta and return it to the pot
          </li>
          <li>
            Add the Bolognese sauce to the cooked pasta and toss the combine.
          </li>
          <li>
            Serve hot, garnished with additional fresh basil or grated Parmesan
            cheese if desired
          </li>
        </ol>
      </article>
    </section>
  );
}

export default claudeRecipe;
