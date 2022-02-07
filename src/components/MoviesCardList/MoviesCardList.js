import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className={`movies-card-list${props.section === 'saved-movies' ? ' saved-movies__movies-card-list' : ''} `} >
      <ul className="movies-card-list__items">
        {props.cards.map(card => (
          <MoviesCard
            key={card.id}
            nameRU={card.nameRU}
            duration={card.duration}
            image={card.image.url}
            isSaved={card.saved}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
