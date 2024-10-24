
const API_KEY ="265a5dd88ce145ebaa3c25d96272bfa1";

const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes){
    recipeListEl.innerHTML="";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageE1 = document. createElement("img");
        recipeImageE1.src = recipe.image;
        recipeImageE1.alt = "recipe image";

        recipeTitleE1 = document.createElement("h2");
        recipeTitleE1.innerText = recipe.title;

        recipeIngredientsE1 = document.createElement("p")
        recipeIngredientsE1.innerHTML = `
            <strong>Ingredienets:</strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(", ")}
        `

        recipeLinkE1 = document.createElement("a");
        recipeLinkE1.hred = recipe.sourcUrl;
        recipeLinkE1.innerText = "View Recipe";

        recipeItemEl.appendChild(recipeImageE1);
        recipeItemEl.appendChild(recipeTitleE1);
        recipeItemEl.appendChild(recipeIngredientsE1);

        recipeItemEl.appendChild(recipeLinkE1);
        recipeListEl.appendChild(recipeItemEl);
        

    });
}

async function getRecipes(){
    const response = await fetch (`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

    const data = await response.json()

    return data.recipes

}


async function init(){
    const recipes = await getRecipes()
    displayRecipes(recipes)
}

init();