//1
//var moviesArr = ["Italian Job", "Shawshank Redemption", "Interstellar", "Pulp Fiction", "The Godfather"];
//window.console.log(moviesArr[1]);

//2
//var moviesArr = [];
//moviesArr[0] = "Italian Job";
//moviesArr[1] = "Shawshank Redemption";
//moviesArr[2] = "Interstellar";
//moviesArr[3] = "Pulp Fiction";
//moviesArr[4] = "The Godfather";

//window.console.log(moviesArr[0]);

//3
//var moviesArr = ["Italian Job", "Shawshank Redemption", "Interstellar", "Pulp Fiction", "The Godfather"];
//moviesArr[3] = ["Titanic"];

//window.console.log(moviesArr.length);

//4
//var moviesArr = [];
//moviesArr[0] = "Italian Job";
//moviesArr[1] = "Shawshank Redemption";
//moviesArr[2] = "Interstellar";
//moviesArr[3] = "Pulp Fiction";
//moviesArr[4] = "The Godfather";

//delete moviesArr[0];
//window.console.log(moviesArr);

//5
//var moviesArr = [];
//moviesArr[0] = "Italian Job";
//moviesArr[1] = "Shawshank Redemption";
//moviesArr[2] = "Interstellar";
//moviesArr[3] = "Pulp Fiction";
//moviesArr[4] = "The Godfather";
//moviesArr[5] = "Matrix";
//moviesArr[6] = "Star Wars";

//var i;
//for (i = 0; i < moviesArr.length; i++) {
//window.console.log(moviesArr[i]);
//}


//6
//var moviesArr = [];
//moviesArr[0] = "Italian Job";
//moviesArr[1] = "Shawshank Redemption";
//moviesArr[2] = "Interstellar";
//moviesArr[3] = "Pulp Fiction";
//moviesArr[4] = "The Godfather";
//moviesArr[5] = "Matrix";
//moviesArr[6] = "Star Wars";

//for (var index in moviesArr) {
//window.console.log(moviesArr[index]);
//}

//7
//var moviesArr = [];
//moviesArr[0] = "Italian Job";
//moviesArr[1] = "Shawshank Redemption";
//moviesArr[2] = "Interstellar";
//moviesArr[3] = "Pulp Fiction";
//moviesArr[4] = "The Godfather";
//moviesArr[5] = "Matrix";
//moviesArr[6] = "Star Wars";

//window.console.log(moviesArr.sort());

//8
//var moviesArr = [];
//moviesArr[0] = "Italian Job";
//moviesArr[1] = "Shawshank Redemption";
//moviesArr[2] = "Interstellar";
//moviesArr[3] = "Pulp Fiction";
//moviesArr[4] = "The Godfather";
//moviesArr[5] = "Matrix";
//moviesArr[6] = "Star Wars";

//var leastFavMovies = [];
//leastFavMovies[0] = "Catwoman";
//leastFavMovies[1] = "Glitter";
//leastFavMovies[2] = "The Last Air Bender";

//for (var index in moviesArr) {
//window.console.log("Movies I like:\n" + moviesArr[index]);

//window.console.log("Movies I don't like:\n" + leastFavMovies[index]);
//}

//9
//var moviesArr = [];
//moviesArr[0] = "Italian Job";
//moviesArr[1] = "Shawshank Redemption";
//moviesArr[2] = "Interstellar";
//moviesArr[3] = "Pulp Fiction";
//moviesArr[4] = "The Godfather";
//moviesArr[5] = "Matrix";
//moviesArr[6] = "Star Wars";

//var leastFavMovies = [];
//leastFavMovies[0] = "Catwoman";
//leastFavMovies[1] = "Glitter";
//leastFavMovies[2] = "The Last Air Bender";

//var movies = moviesArr.concat(leastFavMovies);

//window.console.log(movies);

//10
//var moviesArr = [];
//moviesArr[0] = "Italian Job";
//moviesArr[1] = "Shawshank Redemption";
//moviesArr[2] = "Interstellar";
//moviesArr[3] = "Pulp Fiction";
//moviesArr[4] = "The Godfather";
//moviesArr[5] = "Matrix";
//moviesArr[6] = "Star Wars";

//var leastFavMovies = [];
//leastFavMovies[0] = "Catwoman";
//leastFavMovies[1] = "Glitter";
//leastFavMovies[2] = "The Last Air Bender";

//var movies = moviesArr.concat(leastFavMovies);

//window.console.log(movies[9]);

//11
//var moviesArr = [];
//moviesArr[0] = "Italian Job";
//moviesArr[1] = "Shawshank Redemption";
//moviesArr[2] = "Interstellar";
//moviesArr[3] = "Pulp Fiction";
//moviesArr[4] = "The Godfather";
//moviesArr[5] = "Matrix";
//moviesArr[6] = "Star Wars";

//var leastFavMovies = [];
//leastFavMovies[0] = "Catwoman";
//leastFavMovies[1] = "Glitter";
//leastFavMovies[2] = "The Last Air Bender";

//var movies = moviesArr.concat(leastFavMovies);

//window.console.log(movies[0]);

//12 
//var moviesArr = [];
//moviesArr[0] = "Italian Job";
//moviesArr[1] = "Shawshank Redemption";
//moviesArr[2] = "Interstellar";
//moviesArr[3] = "Pulp Fiction";
//moviesArr[4] = "The Godfather";
//moviesArr[5] = "Matrix";
//moviesArr[6] = "Star Wars";

//var leastFavMovies = [];
//leastFavMovies[0] = "Catwoman";
//leastFavMovies[1] = "Glitter";
//leastFavMovies[2] = "The Last Air Bender";

//var movies = moviesArr.concat(leastFavMovies);
//movies.splice(7, 8, "Deadpool", "Dark Knight", "Persuit of Happyness");

//window.console.log(movies);

//13
//var employee1 = [];
//employee1["id"] = 2452;
//employee1["name"] = "Katie Bouhida";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;

//var employee2 = [];
//employee2["id"] = 2086;
//employee2["name"] = "John Smith";
//employee2["title"] = "Accounting";
//employee2["department"] = "Business";
//employee2["isCurrent"] = true;

//var employees = employee1, employee2;

//window.console.log(employee2["names']);

//14
//var employee1 = [];
//employee1["id"] = 2452;
//employee1["name"] = "Katie Bouhida";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;

//var employee2 = [];
//employee2["id"] = 2086;
//employee2["name"] = "John Smith";
//employee2["title"] = "Accounting";
//employee2["department"] = "Business";
//employee2["isCurrent"] = true;

//var employees = employee1, employee2;
//for (var i = 0; i < employees.length; i++) {
//window.console.log(employees[i][1] + " " + employees[i][6]);
//}

//15
//var employee1 = [];
//employee1["id"] = 4184;
//employee1["name"] = "Katie Bouhida";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;

//var employee2 = [];
//employee2["id"] = 2086;
//employee2["name"] = "John Smith";
//employee2["title"] = "Accounting";
//employee2["department"] = "Business";
//employee2["isCurrent"] = true;

//var employee3 = [];
//employee3["id"] = 847;
//employee3["name"] = "Frank Frink";
//employee3["title"] = "Product Manager";
//employee3["department"] = "Marketing";
//employee3["isCurrent"] = false;

//var employees = employee1, employee2, employee3;
//for (var i = 0; i < employees.length; i++) {
   // if (employees[i][4] == true;  
//window.console.log(employees[i][1]);

//16
//var moviesArr = [["Italian Job", 1], ["Shawshank Redemption", 2], ["Interstellar", 3], ["Pulp Fiction", 4], ["The Godfather", 5]];

//var movies = moviesArr.filter(function(item)) {
//return typeof item == "string";}
//window.console.log(movies);
                            

//Practice with Functions

