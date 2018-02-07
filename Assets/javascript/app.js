//Global Variables Here: 
var recipesID; 
var recipes;
var ingredients = []; 
var recipesArr = [];
var ingrArr = [];
var ingrList;
var ingr;
var recipeArr = [];


function generateRecipe(){
    $("#randomButton").on("click", function(){
        // var queryURLOne = "http://food2fork.com/api/search?key=2a8b74ca359dd160bef9caeb0fa0ae5e&q";
        // var queryURLTwo = "http://food2fork.com/api/get?key=2a8b74ca359dd160bef9caeb0fa0ae5e&q=" + recipesID;       
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/" + "http://food2fork.com/api/search",
            type: "GET",
            data: {
                key: "51e4216e1838bb74cd755821cf711dd6",
                sort: "t",
            }, 
            success: (function (result) {
                recipesArr = JSON.parse(result); 
                randomArr = recipesArr.recipes; 
                // console.log(randomArr);
                randomArr.sort(function(){return 0.5 - Math.random()});

                var recipesTitle = $("<p>");
                var recipesImage = $("<img>");
                var recipesURL = $("<a>");
        
                $(".container-recipe-image").attr("src", recipesImage);
        
                for (var i = 0; i < randomArr.length; i++ ) {
                    recipesID = randomArr[i].recipe_id;
                    recipesImage = randomArr[i].image_url;
                    sourceURL = randomArr[i].source_url;
                    recipesTitle = randomArr[i].title;
                    // $("#recipeLink").innerHTML = recipesURL.toString();  
                    // $("#recipe-title").empty().append("Recipe: " + recipesTitle);
                }

                recipesURL.attr("href", sourceURL);
                recipesURL.attr("target", "_blank");
                recipesURL.text("Click here for the recipe!"); 
                $("#recipes-url").empty().append(recipesURL);
                console.log(recipesURL);
                $("#recipe-title").empty().append(recipesTitle);

                function image() {
                    var img = document.createElement("IMG");
                    img.src = recipesImage;
                    $('.container-recipe-image').html(img); 
                }
                image();

                $.ajax({
                    type:"GET",
                    url: "https://cors-anywhere.herokuapp.com/" + "http://food2fork.com/api/get",
                    data: {
                        key: "51e4216e1838bb74cd755821cf711dd6",
                        rId: recipesID    
                    },
                    success: (function (result) {
                        recipeArr = JSON.parse(result);
                        ingrArr = recipeArr.recipe.ingredients;
                        console.log(typeof recipesID, recipesID);
                        $("#ingrButton").on("click", function(){
                            //create a div that toggles classes to hide/show
                            for (var i=0; i < ingrArr.length; i++){
                                $("#ingredients").append( "<li>" + (i+1) + ".  " + ingrArr[i]+ "</li>");
                                // console.log(ingrArr);
                                // console.log(groceryList);
                                                   
                             }
                        })
                    }), 
                    error: function(error) {
                        console.log("error: " + error);
                    }
                })
            })
        });
    });
}
generateRecipe();

