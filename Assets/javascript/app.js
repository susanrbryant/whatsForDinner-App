//Global Variables Here: 
var recipeID; 
var recipe;
var ingredients = []; 
var recipeObject = {};
var recipeArr = [];
var id;
var ingrArr = [];
var ingrList;
var ingr;


function generateRecipe(){
    $("#randomButton").on("click", function(){
        var queryURLOne = "http://food2fork.com/api/search?key=2a8b74ca359dd160bef9caeb0fa0ae5e&q";
        var queryURLTwo = "http://food2fork.com/api/get?key=2a8b74ca359dd160bef9caeb0fa0ae5e&q=" + recipeID;       
  
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/" + "http://food2fork.com/api/search",
            type: "GET",
            data: {
                key: "1b1fa73fc430d741918a24c4ffe52701",
                sort: "t",
            }, 
            success: (function (result) {
                recipeArr = JSON.parse(result); 
                recipeID = recipeArr.recipes[4].recipe_id;
                id =JSON.stringify(recipeID);
                var recipeTitle = $("<p>");
                var recipeImage = $("<img>");
                console.log(result); // the full object starting with count
                recipeTitle.text("Recipe: " + recipeArr.recipes[4].title);
                //key i need the array 
                $("h2").append(recipeTitle);
                recipeId = recipeArr.recipes[4].recipe_id; 

                $.ajax({
                    type:"GET",
                    url: "https://cors-anywhere.herokuapp.com/" + "http://food2fork.com/api/get",
                    data: {
                        key: "1b1fa73fc430d741918a24c4ffe52701",
                        rId: id
                    },
                    dataType: "json",
                    success: function(result) {
                        // ingrArr = JSON.parse(result);
                        console.log(ingrArr);  // undefined
                        ingr = result[recipes];
                        console.log(ingr);
                        ingrList = JSON.stringify(ingrArr);
                        console.log(ingrList);
                    
                    // console.log(ingrArr);
                    //console.log(id); //"22e67a"
                    //console.log(recipeArr); //  undefined
                    }
                });
        
            console.log(typeof id); // -- undefined
            console.log(typeof recipeID); // -- undefined
            // return recipeID;
            
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





