import Card from '../Card/Card';
import './Dashboard.css';

function Dashboard() {
  return (
    <section className="dashboard">
      <ul className='dashboard__list'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>

    </section>
  );
}

export default Dashboard;
