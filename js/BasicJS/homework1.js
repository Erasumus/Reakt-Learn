//no index.html
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },

    rememberMyFilms: function(){
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
        
    },

    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы клссический зритель");
        } else if (personalMovieDB.count >= 30){
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    ShowMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function(){
        if(personalMovieDB.private){
            personalMovieDB.private = false;
        }
        else{
            personalMovieDB.private = true;
        }
    },

    writeYourGenres: function(){
        for (let i=1; i<2; i++){
            /* let genre = prompt(`Ваш любмый жанр под номером ${i}`).toLowerCase;
            if(genre === '' || genre == null){
                console.log('Вы ввели неверно или пустое');
                i--;
            } else {
                personalMovieDB.genre[i-1] = genre;
            } */

            let genres = prompt('Введите ваши любимые жанры через запятую').toLowerCase();
            if (genres === '' || genres == null){
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
            }
            else{
                personalMovieDB.genres = genres.split(', ');
              
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
};

//  const a = prompt('один из последних просмотренных фильмов');
//  const b = +prompt('на сколько оцените его');
//  const c = prompt('один из последних просмотренных фильмов');
//  const d = +prompt('на сколько оцените его');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



