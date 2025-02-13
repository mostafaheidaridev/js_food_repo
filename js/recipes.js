import { Base_URL } from "./info.js";
const default_recipes = 10;

const showRandomRecipe = (numRecipes = default_recipes) => {
    for (let index = 0; index < numRecipes; index++) {
        fetch(Base_URL)
            .then(response => response.json())
            .then(data => {
                data = data.meals[0];

                document.querySelector("#recipe_list").innerHTML += `
                <article>
                <header>
                <h2>
                ${data.strMeal}
                </h2>
                </header>
                <img src="${data.strMealThumb}" alt="${data.strMeal}">

                <div>
                    <p class="pill">${data.strCategory}</p>
                     <p class="pill">${data.strArea}</p>
                </div>
                </article>
            `;
            })
            .catch(error => console.log(error));
    }
};

showRandomRecipe();