import mealsImage from '../../assets/meals.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return <>
    <header className={classes.header}>
      <h1>Ikigai Sushi</h1>
      <HeaderCartButton /> 
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt={'A table with food.'}/>
    </div>
  </>
};

export default Header;
