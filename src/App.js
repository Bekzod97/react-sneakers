import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {

    async function fetchData() {

      const cartResponse = await axios.get('https://de27ff5173a008d1.mokky.dev/cart');
      const favoritesResponse = await axios.get('https://de27ff5173a008d1.mokky.dev/favorites');
      const itemsResponse = await axios.get('https://de27ff5173a008d1.mokky.dev/items');

      setItems(itemsResponse.data);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
    }
    fetchData();

  }, []);

  const onAddToCart = (obj) => {

    if (cartItems.find(item => Number(item.id) == Number(obj.id))) {
      axios.delete(`https://de27ff5173a008d1.mokky.dev/cart/${obj.id}`)
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post('https://de27ff5173a008d1.mokky.dev/cart', obj)
      setCartItems(prev => [...prev, obj])
    }

    console.log(obj);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://de27ff5173a008d1.mokky.dev/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onAddToFavorite = async (obj) => {

    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://de27ff5173a008d1.mokky.dev/favorites/${obj.id}`)
      } else {
        const { data } = await axios.post("https://de27ff5173a008d1.mokky.dev/favorites", obj)

        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      alert("Не удалось добавить в favorites")
    }
  }

  const onChangeSearchInput = (event) => {

    setSearchValue(event.target.value)

  }

  const onChangeInputKey = (event) => {
    if (event.key == "Escape") {
      setSearchValue("");
    }
  }

  return (

    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCardOpened(false)}
        onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCardOpened(true)} />



      {/* sneakers content start */}

      <Routes>
        <Route path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              onChangeInputKey={onChangeInputKey}
              onChangeSearchInput={onChangeSearchInput}

            />} />

        <Route path="/Favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />} />

      </Routes>
      {/* sneakers content end */}
    </div>
  );
}

export default App;
