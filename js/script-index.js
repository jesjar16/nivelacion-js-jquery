$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	for (var i=0; i<recipesArray.length; i++) {
		if (recipesArray[i].highlighted == true){
			renderRecipe(recipesArray[i]);
		}
	}
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {

	var html_str= "";

	console.log('Voy a pintar la receta: ', recipe);


	html_str+= "<a class='item-recipe' href='#'>";
	html_str+= "<span class='attribution'>";
	html_str+= "<span class='title-recipe'>" + recipe.title + "</span>";
	html_str+= "<span class='metadata-recipe'>";
	html_str+= "<span class='author-recipe'>" + recipe.source.name + "</span>";
	html_str+= "<span class='bookmarks-recipe'>";
	html_str+= "<span class='icon-bookmark'></span>"; 
	html_str+= "</span>";
	html_str+= "</span>";
	html_str+= "</span>";
	html_str+= "<img src='img/recipes/640x800/" + recipe.name + ".jpg' /></a>";	
	
	$('.list-recipes').after(html_str);


}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


