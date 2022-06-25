//Index.html
'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Шрек"
    ]
};

const adv  = document.querySelectorAll('.promo__adv img'),
    bg = document.querySelector('.promo__bg'),
    genre = bg.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    deleteList = movieList.querySelectorAll('.promo__interactive-item .delete'),
    formmovies = document.querySelector('form.add'),
    inputmovie = formmovies.querySelector('.adding__input');

formmovies.addEventListener('submit', (event) =>{
    event.preventDefault();
    if(inputmovie.value == null || inputmovie.value == "") {return;}
    const moviesadd = inputmovie.value;
    movieDB.movies.push(moviesadd.substring(0,21));
    sortListMovies();
    MovieList();
    console.log(movieDB.movies);
});

//Удалить рекламу на сайте
function deleteAds(){
    adv.forEach(adv =>{
        adv.remove();
    });
}

//Изменение баннера
function changeBanner(){
genre.textContent = "Драма"; //Изменить жанр фильма
bg.style.backgroundImage = 'url("img/bg.jpg")'; //Изменить задний фон постера 
}

//Сортировка фильмов
function sortListMovies(){
movieDB.movies.sort();
}

//Вывести [Номер: Название фильма]
function MovieList(){
    movieList.innerHTML = "";
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += ` 
        <li class="promo__interactive-item" style="text-transform: unset">
            ${i + 1 + ". "}  ${film}
            <div class="delete"></div>
        </li> `;
    });
    sortListMovies();

    document.querySelectorAll('.delete').forEach((btn, i) =>{
        btn.addEventListener('click', ()=>{
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            return MovieList();
        });
    });
}

deleteAds();
changeBanner();
MovieList();

