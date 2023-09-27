import './Card.css';

function Card({title, image, background, timeframes}) {
  return (
    <li className="card" style={{ backgroundImage: `url(${image})`, backgroundColor: `${background}` }}
    >
      <div className='card__container'>
        <div className='card__content'>
          <h2 className='card__title'>{title}</h2>
          <button className='card__button' aria-label='learn more'></button>
        </div>
        <div className='card__content card__value'>
          <p className='card__time'>{timeframes.weekly.current}hrs</p>
          <div className='card__previous'>
            <p className='card__text'>Last Week - {timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
