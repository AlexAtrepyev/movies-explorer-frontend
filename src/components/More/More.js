import './More.css';

function More({ visible, onIncreaseDisplayedCount }) {
  return (
    <>
      {visible ? (
        <div className="more">
          <button className="more__button" onClick={onIncreaseDisplayedCount} >Ещё</button>
        </div>
      ) : (
        <div className="more more_inactive" />
      )}
    </>
  );
}

export default More;
