// alert("Hello! I am an alert box!!");

// var queryURLOne = "http://food2fork.com/api/search?key=2a8b74ca359dd160bef9caeb0fa0ae5e&q=shredded%20chicken";
// var queryURLTwo = "http://food2fork.com/api/get?key=2a8b74ca359dd160bef9caeb0fa0ae5e&q=35171";


$.ajax({
    url: "https://cors-anywhere.herokuapp.com/" + "http://food2fork.com/api/get",
    type:"GET",
    data: {
        key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
        rId: 35171
    }
 }).done(function(result){
    console.log(result)
 });
 
 $.ajax({
    url: "https://cors-anywhere.herokuapp.com/" + "http://food2fork.com/api/search",
    type: "GET",
    data: {
        key: "2a8b74ca359dd160bef9caeb0fa0ae5e",
        // q: (optional) Search Query (Ingredients should be separated by commas). If this is omitted top rated recipes will be returned.
        // sort: (optional) How the results should be sorted. See Below for details.
        // page: (optional) Used to get additional results
    }
 }).done(function(result){
    console.log(result)
 });