import './UserCard.css';
import user from '../../images/image-jeremy.png'

function UserCard() {
  return (
    <div className="user">
      <div className='user__info'>
        <img className="user__avatar" src={user} alt="user" />
        <div className='user__about'>
          <p className='user__text'>Report for</p>
          <h1 className='user__name'>Jeremy Robson</h1>
        </div>
      </div>
      <div>
        <ul  className='user__time'>
          <li className='user__period-item'><p className='user__period'>Daily</p></li>
          <li className='user__period-item'><p className='user__period user__period_active'>Weekly</p></li>
          <li className='user__period-item'><p className='user__period'>Monthly</p></li>
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
