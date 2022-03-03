import './More.css';

function More(props) {
  return (
    <>
      {props.visible ? (
        <div className="more">
          <button className="more__button" onClick={props.onIncreaseMoviesCount} >Ещё</button>
        </div>
      ) : (
        <div className="more more_inactive" />
      )}
    </>
  );
}

export default More;
