import Card from '../UI/Card';
import classes from './AvailableProds.module.css';

const DUMMY_PRODS = [
  {
    id: 'p1',
    name: 'Sushi',
    description: 'Finest fish and veggies.',
    price: 22.99,
  },
  {
    id: 'p2',
    name: 'Hot Uramaki',
    description: 'Hot the way we like it!',
    price: 19.5,
  },
  {
    id: 'p3',
    name: 'Sashimi ',
    description: 'Skinny and delicious.',
    price: 12.99,
  },
  {
    id: 'p4',
    name: 'Lobster Rolls',
    description: 'Yammy!',
    price: 38.99,
  },
];

const AvailableProds = () => {
  const prodsList = DUMMY_PRODS.map(prod => <li>{prod.name}</li>);

  return (
    <section className={classes.prods}>
      <Card>
        <ul>{prodsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProds;
