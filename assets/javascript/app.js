//Global Variables Here: 
var recipesID;
var recipes;
var ingredients = [];
var recipesArr = [];
var ingrArr = [];
var ingrList;
var ingr;
var recipeArr = [];
var search;


function save(){
  
    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');
    
    form.addEventListener('submit',function(e){
      e.preventDefault();
      list.innerHTML += '<li>' + item.value + '</li>';
      store();
      item.value = "";
    },false);
    
    list.addEventListener('click',function(e){
      var t = e.target;
      if(t.classList.contains('checked')){
        t.parentNode.removeChild(t);
      } else {
        t.classList.add('checked');
      }
      store();
    },false);
    
    function store() {
        window.localStorage.myitems = list.innerHTML;
    }

    function getValues() {
        var storedValues = window.localStorage.myitems;
        if (!storedValues) {
            list.innerHTML = '<li>Make a to do list</li>' +
                '<li>Check off first thing on the to do list</li>' +
                '<li>Realize you have already accomplished 2 things in the list</li>' +
                '<li>Reward yourself with a nap</li>';
        }
        else {
            list.innerHTML = storedValues;
        }
    }
    getValues();
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function generateRecipe() {

    $("#randomButton").on("click", function () {
        // var queryURLOne = "http://food2fork.com/api/search?key=2a8b74ca359dd160bef9caeb0fa0ae5e&q";
        // var queryURLTwo = "http://food2fork.com/api/get?key=2a8b74ca359dd160bef9caeb0fa0ae5e&q=" + recipesID; 
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/" + "https://food2fork.com/api/search",
            type: "GET",
            data: {
                key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
                sort: "t",
            },
            success: (function (result) {
                recipesArr = JSON.parse(result);
                randomArr = recipesArr.recipes;
                randomArr.sort(function () { return 0.5 - Math.random(); });

                var recipesTitle = $("<p>");
                var recipesImage = $("<img>");
                var recipesURL = $("<a>");

                $(".container-recipe-image").attr("src", recipesImage);

                for (var i = 0; i < randomArr.length; i++) {
                    recipesID = randomArr[i].recipe_id;
                    recipesImage = randomArr[i].image_url;
                    sourceURL = randomArr[i].source_url;
                    recipesTitle = randomArr[i].title;
                }

                recipesURL.attr("href", sourceURL);
                recipesURL.attr("target", "_blank");
                recipesURL.text("Click here for the recipe!");
                $("#recipes-url").empty().append(recipesURL);
                $("#recipe-title").empty().append(recipesTitle);

                function image() {
                    var img = document.createElement("IMG");
                    img.src = recipesImage;
                    $('.container-recipe-image').html(img);
                }
                image();

                $("#ingrButton").on("click", function () {
                    $.ajax({
                        type: "GET",
                        url: "https://cors-anywhere.herokuapp.com/" + "https://food2fork.com/api/get",
                        data: {
                            key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
                            rId: recipesID
                        },
                        success: (function (result) {
                            recipeArr = JSON.parse(result);
                            ingrArr = recipeArr.recipe.ingredients;
                            // $("#ingrTitle").toggleClass("hide");
                            // $("#ingrTitle").html("Ingredients: ");

                            $(".fas fa-heart").on("click", function () {
                                // add recipe title and url to local storage nav bar
                            });

                            for (var i = 0; i < ingrArr.length; i++) {
                                $("#fullGroceryList").append("<li>" + (i + 1) + ". " + ingrArr[i] + "</li>");
                                var input = $("#savedGroceryList");
                                localStorage.setItem("server", input.value);
                            }

                            $("#showGroceryList").on("click", function () {
                                $("#showGroceryList").animate({ width: 0 }, { duration: 1000 });
                                $("#showGroceryList").hide();
                                $('#fullGroceryList').show();
                              $('#fullGroceryList').animate({ width: 400}, { duration: 1000 });
                            });

                            $("#fullGroceryList").click(function () {
                                $(this).animate({ width: 0 }, { duration: 1000 });
                                $(this).hide();
                                $('#showGroceryList').show();
                                $('#showGroceryList').animate({ width: 100 }, { duration: 1000 });
                            });
                        }),
                        error: (function (error) {
                            console.log("error: " + error);
                        })
                    });
                });
            }),
        });
    });

    $("#chickenButton").on("click", function () {
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/" + "https://food2fork.com/api/search",
            type: "GET",
            data: {
                key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
                q: "chicken",
            },
            success: (function (result) {
                recipesArr = JSON.parse(result);
                randomArr = recipesArr.recipes;
                randomArr.sort(function () { return 0.5 - Math.random(); });

                var recipesTitle = $("<p>");
                var recipesImage = $("<img>");
                var recipesURL = $("<a>");

                $(".container-recipe-image").attr("src", recipesImage);

                for (var i = 0; i < randomArr.length; i++) {
                    recipesID = randomArr[i].recipe_id;
                    recipesImage = randomArr[i].image_url;
                    sourceURL = randomArr[i].source_url;
                    recipesTitle = randomArr[i].title;
                }

                recipesURL.attr("href", sourceURL);
                recipesURL.attr("target", "_blank");
                recipesURL.text("Click here for the recipe!");
                $("#recipes-url").empty().append(recipesURL);
                $("#recipe-title").empty().append(recipesTitle);

                function image() {
                    var img = document.createElement("IMG");
                    img.src = recipesImage;
                    $('.container-recipe-image').html(img);
                }
                image();
                $("#ingrButton").on("click", function () {
                    $.ajax({
                        type: "GET",
                        url: "https://cors-anywhere.herokuapp.com/" + "https://food2fork.com/api/get",
                        data: {
                            key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
                            rId: recipesID
                        },
                        success: (function (result) {
                            recipeArr = JSON.parse(result);
                            ingrArr = recipeArr.recipe.ingredients;
                            // $("#ingrTitle").toggleClass("hide");
                            // $("#ingrTitle").html("Ingredients: ");

                            $(".fas fa-heart").on("click", function () {
                                // add recipe title and url to local storage nav bar
                            });

                            for (var i = 0; i < ingrArr.length; i++) {
                                $("#fullGroceryList").append("<li>" + (i + 1) + ". " + ingrArr[i] + "</li>");
                                var input = $("#savedGroceryList");
                                localStorage.setItem("server", input.value);
                            }

                            $("#showGroceryList").on("click", function () {
                                $("#showGroceryList").animate({ width: 0 }, { duration: 1000 });
                                $("#showGroceryList").hide();
                                $('#fullGroceryList').show();
                                $('#fullGroceryList').animate({ width: 400 }, { duration: 1000 });
                            });

                            $("#fullGroceryList").click(function () {
                                $(this).animate({ width: 0 }, { duration: 1000 });
                                $(this).hide();
                                $('#showGroceryList').show();
                                $('#showGroceryList').animate({ width: 100 }, { duration: 1000 });
                            });
                        }),
                        error: (function (error) {
                            console.log("error: " + error);
                        })
                    });
                });
            }),
            error: (function (error) {
                console.log(error);
            })
        });

    });

    $("#seafoodButton").on("click", function () {
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/" + "https://food2fork.com/api/search",
            type: "GET",
            data: {
                key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
                q: "seafood",
            },
            success: (function (result) {
                recipesArr = JSON.parse(result);
                randomArr = recipesArr.recipes;
                randomArr.sort(function () { return 0.5 - Math.random(); });

                var recipesTitle = $("<p>");
                var recipesImage = $("<img>");
                var recipesURL = $("<a>");

                $(".container-recipe-image").attr("src", recipesImage);

                for (var i = 0; i < randomArr.length; i++) {
                    recipesID = randomArr[i].recipe_id;
                    recipesImage = randomArr[i].image_url;
                    sourceURL = randomArr[i].source_url;
                    recipesTitle = randomArr[i].title;
                }

                recipesURL.attr("href", sourceURL);
                recipesURL.attr("target", "_blank");
                recipesURL.text("Click here for the recipe!");
                $("#recipes-url").empty().append(recipesURL);
                $("#recipe-title").empty().append(recipesTitle);

                function image() {
                    var img = document.createElement("IMG");
                    img.src = recipesImage;
                    $('.container-recipe-image').html(img);
                }
                image();

                $("#ingrButton").on("click", function () {
                    $.ajax({
                        type: "GET",
                        url: "https://cors-anywhere.herokuapp.com/" + "https://food2fork.com/api/get",
                        data: {
                            key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
                            rId: recipesID
                        },
                        success: (function (result) {
                            recipeArr = JSON.parse(result);
                            ingrArr = recipeArr.recipe.ingredients;
                            // $("#ingrTitle").toggleClass("hide");
                            // $("#ingrTitle").html("Ingredients: ");

                            $(".fas fa-heart").on("click", function () {
                                // add recipe title and url to local storage nav bar
                            });

                            for (var i = 0; i < ingrArr.length; i++) {
                                $("#fullGroceryList").append("<li>" + (i + 1) + ". " + ingrArr[i] + "</li>");
                                var input = $("#savedGroceryList");
                                localStorage.setItem("server", input.value);
                            }

                            $("#showGroceryList").on("click", function () {
                                $("#showGroceryList").animate({ width: 0 }, { duration: 1000 });
                                $("#showGroceryList").hide();
                                $('#fullGroceryList').show();
                                $('#fullGroceryList').animate({ width: 400 }, { duration: 1000 });
                            });

                            $("#fullGroceryList").click(function () {
                                $(this).animate({ width: 0 }, { duration: 1000 });
                                $(this).hide();
                                $('#showGroceryList').show();
                                $('#showGroceryList').animate({ width: 100 }, { duration: 1000 });
                            });
                        }),
                        error: (function (error) {
                            console.log("error: " + error);
                        })
                    });
                });
            }),
        });
    });

    $("#vegetablesButton").on("click", function () {
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/" + "https://food2fork.com/api/search",
            type: "GET",
            data: {
                key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
                q: "vegetables",
            },
            success: (function (result) {
                recipesArr = JSON.parse(result);
                randomArr = recipesArr.recipes;
                randomArr.sort(function () { return 0.5 - Math.random(); });

                var recipesTitle = $("<p>");
                var recipesImage = $("<img>");
                var recipesURL = $("<a>");

                $(".container-recipe-image").attr("src", recipesImage);

                for (var i = 0; i < randomArr.length; i++) {
                    recipesID = randomArr[i].recipe_id;
                    recipesImage = randomArr[i].image_url;
                    sourceURL = randomArr[i].source_url;
                    recipesTitle = randomArr[i].title;
                }

                recipesURL.attr("href", sourceURL);
                recipesURL.attr("target", "_blank");
                recipesURL.text("Click here for the recipe!");
                $("#recipes-url").empty().append(recipesURL);
                $("#recipe-title").empty().append(recipesTitle);

                function image() {
                    var img = document.createElement("IMG");
                    img.src = recipesImage;
                    $('.container-recipe-image').html(img);
                }
                image();

             $("#ingrButton").on("click", function() {
                $.ajax({
                    type: "GET",
                    url: "https://cors-anywhere.herokuapp.com/" + "https://food2fork.com/api/get",
                    data: {
                        key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
                        rId: recipesID
                    },
                    success: (function (result) {
                        recipeArr = JSON.parse(result);
                        ingrArr = recipeArr.recipe.ingredients;


                        // $("#ingrTitle").toggleClass("hide");
                        // $("#ingrTitle").html("Ingredients: ");

                        $(".fas fa-heart").on("click", function() {
                            // add recipe title and url to local storage nav bar
                        });

                        $(".fas fa-heart").on("click", function () {
                            // add recipe title and url to local storage nav bar
                        });

                        for (var i = 0; i < ingrArr.length; i++) {
                            $("#fullGroceryList").append("<li>" + (i + 1) + ".  " + ingrArr[i] + "</li>");
                            var input = $("#savedGroceryList");
                            localStorage.setItem("server", input.value);
                        }

                        $("#showGroceryList").on("click", function () {
                            $("#showGroceryList").animate({ width: 0 }, { duration: 1000 });
                            $("#showGroceryList").hide();
                            $('#fullGroceryList').show();
                            $('#fullGroceryList').animate({ width: 400 }, { duration: 1000 });
                        });

                        $("#fullGroceryList").click(function () {
                            $(this).animate({ width: 0 }, { duration: 1000 });
                            $(this).hide();
                            $('#showGroceryList').show();
                            $('#showGroceryList').animate({ width: 100 }, { duration: 1000 });
                        });
                    }),
                    error: (function (error) {
                        console.log("error: " + error);
                    })
                });
            });
            })
        });
    });
    
    $("#pastaButton").on("click", function () {
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/" + "https://food2fork.com/api/search",
            type: "GET",
            data: {
                key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
                q: "pasta",
            },
            success: (function (result) {
                recipesArr = JSON.parse(result);
                randomArr = recipesArr.recipes;
                randomArr.sort(function () { return 0.5 - Math.random(); });

                var recipesTitle = $("<p>");
                var recipesImage = $("<img>");
                var recipesURL = $("<a>");

                $(".container-recipe-image").attr("src", recipesImage);

                for (var i = 0; i < randomArr.length; i++) {
                    recipesID = randomArr[i].recipe_id;
                    recipesImage = randomArr[i].image_url;
                    sourceURL = randomArr[i].source_url;
                    recipesTitle = randomArr[i].title;
                }

                recipesURL.attr("href", sourceURL);
                recipesURL.attr("target", "_blank");
                recipesURL.text("Click here for the recipe!");
                $("#recipes-url").empty().append(recipesURL);

                $("#recipe-title").empty().append(recipesTitle);

                function image() {
                    var img = document.createElement("IMG");
                    img.src = recipesImage;
                    $('.container-recipe-image').html(img);
                }
                image();
                $("#ingrButton").on("click", function () {
                    $.ajax({
                        type: "GET",
                        url: "https://cors-anywhere.herokuapp.com/" + "https://food2fork.com/api/get",
                        data: {
                            key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
                            rId: recipesID
                        },
                        success: (function (result) {
                            recipeArr = JSON.parse(result);
                            ingrArr = recipeArr.recipe.ingredients;
                          
                            $(".fas fa-heart").on("click", function () {
                                // add recipe title and url to local storage nav bar
                            });

                            for (var i = 0; i < ingrArr.length; i++) {
                                $("#fullGroceryList").append("<li>" + (i + 1) + ". " + ingrArr[i] + "</li>");
                                var input = $("#savedGroceryList");
                                localStorage.setItem("server", input.value);
                            }

                            $("#showGroceryList").on("click", function () {
                                $("#showGroceryList").animate({ width: 0 }, { duration: 1000 });
                                $("#showGroceryList").hide();
                                $('#fullGroceryList').show();
                                $('#fullGroceryList').animate({ width: 400 }, { duration: 1000 });
                            });


                            $("#fullGroceryList").click(function () {
                                $(this).animate({ width: 0 }, { duration: 1000 });
                                $(this).hide();
                                $('#showGroceryList').show();
                                $('#showGroceryList').animate({ width: 100 }, { duration: 1000 });
                            });

                        }),
                        error: (function (error) {
                            console.log("error: " + error);
                        })
                    });
                });
            }),
            error: (function (error) {
                console.log(error);
            })
        });
    });
}
generateRecipe();

$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('#scrolling').fadeIn(200);
    } else {
        $('#scrolling').fadeOut(200);
    }
});

$('.random-recipe-title').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({ loop: false }).add({
    targets: '.random-recipe-title .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function (el, i) {
        return 150 * (i + 1);
    }
});