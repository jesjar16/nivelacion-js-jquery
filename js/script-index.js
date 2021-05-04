$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	for (var i=0; i<recipesArray.length; i++) {
		if (recipesArray[i].highlighted == true){
			renderRecipe(recipesArray[i]);
		}
	}

	renderActivities(activities);
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

	if (activitiesArray.length > 0)
		$('.wrapper-message').hide();

	for (var i=0; i<activitiesArray.length; i++){
		renderActivity(activitiesArray[i]);
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

	console.log('Entró a render activity', recipe.image);
	var html_str= "";

	html_str+= "<a href='#' class='item-activity'>";
	html_str+= "<span class='attribution'>";
	html_str+= "<span class='avatar'>";
	html_str+= "<img src='" + recipe.image +"' class='image-avatar'>";
	html_str+= "</span>";
	html_str+= "<span class='meta'>";
	html_str+= "<span class='author'>" + recipe.userName + "</span> made "; 
	html_str+= "<span class='recipe'>" + recipe.recipeName + "</span>: " + recipe.text;
	html_str+= "<span class='location'>"+ recipe.place +"</span>";
	html_str+= "</span></span>";
	html_str+= "<div class='bg-image' ";
	html_str+= "style='background-image: url(" + recipe.image + ");'>";
	html_str+= "</div></a>";

	console.log(html_str);

	$('.wrapper-message').before(html_str);
}


