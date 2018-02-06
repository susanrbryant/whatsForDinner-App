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
        // var queryURLOne = "http://food2fork.com/api/search?key=2a8b74ca359dd160bef9caeb0fa0ae5e&q";
        // var queryURLTwo = "http://food2fork.com/api/get?key=2a8b74ca359dd160bef9caeb0fa0ae5e&q=" + recipesID;       
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/" + "http://food2fork.com/api/search",
            type: "GET",
            data: {
                key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
                sort: "t",
            }, 
            success: (function (result) {
                recipesArr = JSON.parse(result); 
                randomArr = recipesArr.recipes; 
                // console.log(randomArr);
                randomArr.sort(function(){return 0.5 - Math.random()});

                var recipesTitle = $("<p>");
                var recipesImage = $("<img>");
        
                $(".container-recipe-image").attr("src", recipesImage);
                $("h2").empty().append(recipesTitle);
                for (var i = 0; i < randomArr.length; i++ ) {
                    // console.log(randomArr[i])
                    recipesID = randomArr[i].recipe_id;
                    recipesImage = randomArr[i].image_url;
                    // console.log(randomArr[i].title);
                    recipesTitle.html("Recipe: " + randomArr[i].title);
                }
                
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
                        key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
                        rId: recipesID    
                    },
                    success: (function (result) {
                        // console.log(result);
                        recipeArr = JSON.parse(result);
                        // console.log(recipeArr);
                        ingrArr = recipeArr.recipe.ingredients;
                        // console.log(ingrArr);
                        console.log(ingrArr[6]);
                    
                        $(".ingredients").empty().prepend(ingrArr);
                        $(".ingredients").html("ingredients: " + ingrArr);
                        var ingrList = $("<ul>");
                        for (var i=0; i < ingrArr.length; i++){
                            $(".ingredients").html(ingrArr[i]); 
                        }
                        // for loop here
                        // console.log(ingrList); 
                        $(this).prepend("<span>" + ($(this).index() +1) + ".</span>");
                        // $('ul > li').each(function() {
                            
                        // })
                        
                    })
                })
            })
        });
    });
}
generateRecipe();


