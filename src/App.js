import Header from "./components/Header"
import Drawer from "./components/Drawer";
import Card from "./components/Card";

const arr = [
  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imageUrl: "/img/sneakers/sneaker-2.jpg" },
  { title: "Мужские Кроссовки Nike Air Max 270", price: 12999, imageUrl: "/img/sneakers/sneaker-1.jpg" },

  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 8499, imageUrl: "/img/sneakers/sneaker-3.jpg" },
  { title: "Кроссовки Puma X Aka Boku Future Rider", price: 8999, imageUrl: "/img/sneakers/sneaker-4.jpg" },
  { title: "Мужские Кроссовки Under Armour Curry 8", price: 15199, imageUrl: "/img/sneakers/sneaker-5.jpg" }
]

function App() {
  return (
    <div className="wrapper">

      <Drawer />
      <Header />
      {/* header end */}

      <main className="main">
        <div className="items__list">
          <div className="container">
            <div className="sneakers">
              <div className="sneakers__title">
                <h1 className="title">Все кроссовки</h1>
                <div className="search__block">
                  <img src="/img/search-icon.svg" alt="search" />
                  <input type="text" placeholder="Поиск..." />
                </div>
              </div>

              <ul className="sneakers__list">
                {arr.map((obj) => (
                  <Card
                    title={obj.title}
                    price={obj.price}
                    imageUrl={obj.imageUrl}
                  />
                ))}
              </ul>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;

