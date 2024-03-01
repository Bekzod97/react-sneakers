import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";


let arr = [
  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imageUrl: "/img/sneakers/sneaker-1.png" },
  { title: "Мужские Кроссовки Nike Air Max 270", price: 12999, imageUrl: "/img/sneakers/sneaker-2.png" },
  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 8499, imageUrl: "/img/sneakers/sneaker-3.png" },
  { title: "Кроссовки Puma X Aka Boku Future Rider", price: 8999, imageUrl: "/img/sneakers/sneaker-4.png" },
  { title: "Мужские Кроссовки Under Armour Curry 8", price: 15099, imageUrl: "/img/sneakers/sneaker-5.png" },
  { title: "Мужские Кроссовки Nike Kyrie 7", price: 11299, imageUrl: "/img/sneakers/sneaker-3.png" },
  { title: "Мужские Кроссовки Jordan Air Jordan 11", price: 10799, imageUrl: "/img/sneakers/sneaker-5.png" },
]



function App() {
  return (
    <div className="wrapper clear">
      {/* drawer start */}

      <Drawer />
      {/* drawer end */}

      <Header />

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

          {arr.map((value) => (<Card
            title={value.title}
            price={value.price}
            imageUrl={value.imageUrl}
            onClick={() => console.log(value)} />))
          }



        </div>
      </div>

      {/* sneakers content end */}
    </div>
  );
}

export default App;
