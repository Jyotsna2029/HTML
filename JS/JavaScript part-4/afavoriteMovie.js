let favoriteMovie = "Avatar";

let guess = prompt("Please Guess a Movie")

while((guess != favoriteMovie) && (guess != "quit")){
    console.log("Wrong, guess try again");
    guess = prompt("Please Guess Again!");
}

if(guess == favoriteMovie ){
    console.log("Congratulatiions! You guess it right!");
}else{
    console.log("Game over. The movie was " + favoriteMovie);
}