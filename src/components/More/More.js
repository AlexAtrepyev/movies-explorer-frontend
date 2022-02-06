import './More.css';

function More(props) {
  return (
    <div className={`more${props.type === 'SavedMovies' ? ' saved-movies__more' : ''}`}>
      {props.type !== 'SavedMovies' && <button className="more__button">Ещё</button>}
    </div>
  );
}

export default More;
