import Card from '../Card/Card';
import './Dashboard.css';
import cards from '../../utils/cards';

function Dashboard() {

  return (
    <section className="dashboard">
      <ul className='dashboard__list'>


      {cards.map(item => {
          return (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              background={item.background}
              timeframes={item.timeframes}
            />
          )
        })}
      </ul>

    </section>
  );
}

export default Dashboard;
