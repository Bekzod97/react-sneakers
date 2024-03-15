import React from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://65f299f3034bdbecc76546bc.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json)
    })
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  console.log(cartItems)

  return (

    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCardOpened(false)} />}

      <Header onClickCart={() => setCardOpened(true)} />

      {/* sneakers content start */}
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width={14} height={14} src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск" />
          </div>
        </div>

        <div className="sneakers d-flex">

          {items.map((value) => (<Card
            title={value.title}
            price={value.price}
            imageUrl={value.imageUrl}
            onFavorite={() => console.log("Нажали favorite")}
            onPlus={(obj) => onAddToCart(obj)}
          />))}
        </div>
      </div>

      {/* sneakers content end */}
    </div>
  );
}

export default App;
