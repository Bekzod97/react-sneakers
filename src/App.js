

function App() {
  return (
    <div className="wrapper clear">

      {/* headaer start */}
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="mr-10" width={40} height={40} src="/img/logo.png" alt="logo" />

          <div className="headerInfo">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="headerRight d-flex align-center">
          <li className="d-flex align-center">
            <img className="m-5" width={20} height={20} src="/img/basket.svg" alt="basket" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/liked.svg" alt="liked" />
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>

      {/* header end */}

      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="sneakers d-flex">

          <div className="card">
            <img width={133} src="/img/sneakers/sneaker-1.png" alt="sneaker-1" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} src="/img/sneakers/sneaker-1.png" alt="sneaker-1" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} src="/img/sneakers/sneaker-1.png" alt="sneaker-1" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} src="/img/sneakers/sneaker-1.png" alt="sneaker-1" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} src="/img/sneakers/sneaker-1.png" alt="sneaker-1" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} src="/img/sneakers/sneaker-1.png" alt="sneaker-1" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12999 руб</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


