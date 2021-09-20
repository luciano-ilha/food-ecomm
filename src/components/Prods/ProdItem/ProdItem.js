import classes from './ProdItem.module.css';
import ProdItemForm from './ProdItemForm';

const ProdItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.prod}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProdItemForm />
      </div>
    </li>
  );
};

export default ProdItem;