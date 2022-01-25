import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';
import Preloader from '../Preloader/Preloader';
import cards from '../../utils/cards';
//const cards = null;

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      {cards ? (
        <>
          <ul className="movies-card-list__items">
            {cards.map(card => (
              <MoviesCard
                key={card.id}
                nameRU={card.nameRU}
                duration={card.duration}
                image={card.image.url}
                isSaved={card.saved}
              />
            ))}
          </ul>
          <More />
        </>
      ) : (
        <Preloader />
      )}
    </section>
  );
}

export default MoviesCardList;
