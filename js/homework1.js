let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

//  const a = prompt('один из последних просмотренных фильмов');
//  const b = +prompt('на сколько оцените его');
//  const c = prompt('один из последних просмотренных фильмов');
//  const d = +prompt('на сколько оцените его');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов'),
              b = +prompt('На сколько оцените его');
    
        if(a != null && b !=null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        }  else {
            console.log('error');
            i--;
        }
    }
    
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы клссический зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function ShowMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

ShowMyDB(personalMovieDB.private);

function writeYourGenres(){
    for (let i=1; i<=3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любмый жанр под номером ${i}`);
    }
}

writeYourGenres();