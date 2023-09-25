import './Card.css';

function Card() {
  return (
    <li className="card">
      <div className='card__container'>
        <div className='card__content'>
          <h2 className='card__title'>Work</h2>
          <button className='card__button'></button>
        </div>
        <div className='card__content card__value'>
          <p className='card__time'>32hrs</p>
          <div className='card__previous'>
            <p className='card__text'>Last Week - 36hrs</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
