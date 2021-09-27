import { useState } from 'react';
import classes from './App.module.css'
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Prods from './components/Prods/Prods';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main className={classes['background-image']}>
        <Prods />
      </main>
    </CartProvider>
  );
};

export default App;
