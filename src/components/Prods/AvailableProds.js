import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableProds.module.css';
import ProdItem from './ProdItem/ProdItem';

const AvailableProds = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://food-ecomm-default-rtdb.firebaseio.com/products.json').then();
      const responseData = await response.json();

      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      };

      setProducts(loadedProducts);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.ProductsLoading}>
        <p>Loading...</p>
     </section> 
    );
  }

  const prodsList = products.map((prod) => (
    <ProdItem
      key={prod.id}
      id={prod.id}
      name={prod.name}
      description={prod.description}
      price={prod.price}
    />
  ));

  return (
    <section className={classes.prods}>
      <Card>
        <ul>{prodsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProds;
