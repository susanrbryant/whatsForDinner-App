//Global Variables Here: 
var recipesID; 
var recipes;
var ingredients = []; 
var recipesArr = [];
var ingrArr = [];
var ingrList;
var ingr;
var recipeArr = []


function generateRecipe(){
    $("#randomButton").on("click", function(){
        var queryURLOne = "http://food2fork.com/api/search?key=2a8b74ca359dd160bef9caeb0fa0ae5e&q";
        var queryURLTwo = "http://food2fork.com/api/get?key=2a8b74ca359dd160bef9caeb0fa0ae5e&q=" + recipesID;       
  
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/" + "http://food2fork.com/api/search",
            type: "GET",
            data: {
                key: "1b1fa73fc430d741918a24c4ffe52701",
                sort: "t",
            }, 
            success: (function (result) {
                recipesArr = JSON.parse(result); 
                recipesID = recipesArr.recipes[4].recipe_id;
                // console.log(recipeID);
                var recipesTitle = $("<p>");
                var recipesImage = $("<img>");
                recipesTitle.text("Recipe: " + recipesArr.recipes[4].title);
                $("h2").append(recipesTitle);
                recipesId = recipesArr.recipes[4].recipe_id; 

                $.ajax({
                    type:"GET",
                    url: "https://cors-anywhere.herokuapp.com/" + "http://food2fork.com/api/get",
                    data: {
                        key: "1b1fa73fc430d741918a24c4ffe52701",
                        rId: recipesId    
                    },
                    success: (function (result) {
                        // console.log(result);
                        recipeArr = JSON.parse(result);
                        // console.log(recipeArr);
                        ingrArr = recipeArr.recipe.ingredients; 
                        // console.log(ingrArr);
                        var ingrList = $("<ul>");
                        ingrList.html("ingredients " + ingrArr);
                        console.log(ingrArr);
                        $(".ingredients").append(ingrList);
                        // console.log(ingrList);
                       

                    })
                });


            
            })
        });

       
 
  
    // render to page
    //     render();

    // var render = function(){            
    //     $(".container-recipe").html(recipe);
    
    // }
    });
}
generateRecipe();





