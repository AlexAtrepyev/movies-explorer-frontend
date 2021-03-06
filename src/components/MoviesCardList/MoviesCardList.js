import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ section, data, onAddMovie, onDeleteMovie, isLoading, apiError, hasBeenSearched }) {
  let sectionClass = 'movies-card-list';
  if (section === 'saved-movies') sectionClass += ' saved-movies__movies-card-list';

  return (
    <section className={sectionClass} >
      {isLoading ? (
        <Preloader />
      ) : (
        apiError ? (
          <p className="movies-card-list__info">
            Невозможно сохранить карточку
          </p>
        ) : (
          data?.length > 0 ? (
            <ul className="movies-card-list__items">
              {data.map(item => (
                <MoviesCard
                  key={item.movieId}
                  section={section}
                  data={item}
                  onAddMovie={onAddMovie}
                  onDeleteMovie={onDeleteMovie}
                />
              ))}
            </ul>
          ) : (
            <p className="movies-card-list__info">{hasBeenSearched && 'Ничего не найдено'}</p> 
          )
        )
      )}
    </section>
  );
}

export default MoviesCardList;
