import Header from "./components/Header";
import Drawer from "./components/Drawer"
import Card from "./components/Card";

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

          <Card />

        </div>
      </div>

      {/* sneakers content end */}
    </div>
  );
}

export default App;


