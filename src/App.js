import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Prods from "./components/Prods/Prods";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Prods />
      </main>
    </>
  );
};

export default App;
