const movies = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
  ];

// захватываем нужные значения 
const items = document.getElementById('items');
const bestMovies = document.getElementById('bestMovies');

// Добавляем по одному элементу спискав массив
movies.forEach((item) => {
    let div = `<div class="item">
    <div class="item__main-info">
    <h2 class="item__name">${item.name}</h2>
    <p class="item__parameters">${item.career}</p>
    </div>
    <a href="${item.films}">Фильмография</a>
    </div>`

    const element = document.createElement('div');
    element.innerHTML = div;

    items.append(element);
    
    // liItems.push(div);
    // bestFilms.push(item.top_rated_film);
});

const arrBestMovies = [];

movies.forEach((item)=> {
  arrBestMovies.push(`"${item.top_rated_film}"`);
})

const moviesList = arrBestMovies.join(', ');

bestMovies.innerText = moviesList;

// // Создаем список режиссёров из кусочков
// const buildHTMLList = (items) => {

//     const parts = [];

//     for (const item of items) {
//         parts.push(`<li>${item}</li>`);
//     }

//     const innerValue = parts.join('');
//     const result = `<ul>${innerValue}</ul>`;
//     return result;
// };

// // Сoздаём строку c  
// const htmlFilmsList = buildHTMLList(liItems);







