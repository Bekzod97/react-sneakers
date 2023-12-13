

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="container">
          <div className="header__wrapper">

            <div className="hedaer__info">
              <a href="#!">
                <img src="/img/logo.svg" />
              </a>

              <div className="header__info-text">
                <h3>REACT SNEAKERS</h3>
                <p>Магазин лучших кроссовок</p>
              </div>
            </div>

            <div className="hedaer__list">

              <div className="list__item">
                <img src="/img/header-item-1.svg" />
                <a href="#!" className="font-weight">1205 руб.</a>
              </div>

              <div className="list__item">
                <img src="/img/header-item-2.svg" />
                <a href="#!">Закладки</a>
              </div>

              <div className="list__item">
                <img src="/img/header-item-3.svg" />
                <a href="#!">Профиль</a>
              </div>

            </div>

          </div>
        </div>
      </header>

      {/* header end */}
      <main className="main">
        <div className="items__list">
          <div className="container">
            <div className="sneakers">
              <h1 className="title">Все кроссовки</h1>
              <ul className="sneakers__list">

                <li className="sneakers__list-card card--active">

                  <div className="card__photo">
                    <div className="card__photo-favorites">
                      <svg className="card__photo-favorites" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" >
                        <path d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <img src="/img/sneakers/sneaker-1.jpg" alt="Кроссовки" />

                  </div>
                  <p className="sneaker__info">Мужские Кроссовки Nike Air Max 270</p>

                  <div className="sneaker__current">
                    <div className="sneaker__current-item">
                      <span className="current-text-bd">Цена:</span>
                      <span className="current-item-wg">12 999 руб.</span>
                    </div>
                    <div className="sneaker__add-icon">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                      </svg>

                    </div>
                  </div>


                </li>

                <li className="sneakers__list-card">

                  <div className="card__photo">
                    <div className="card__photo-favorites">
                      <svg className="card__photo-favorites" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" >
                        <path d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <img src="/img/sneakers/sneaker-1.jpg" alt="Кроссовки" />

                  </div>
                  <p className="sneaker__info">Мужские Кроссовки Nike Air Max 270</p>

                  <div className="sneaker__current">
                    <div className="sneaker__current-item">
                      <span className="current-text-bd">Цена:</span>
                      <span className="current-item-wg">12 999 руб.</span>
                    </div>
                    <div className="sneaker__add-icon">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                      </svg>

                    </div>
                  </div>


                </li>

                <li className="sneakers__list-card">

                  <div className="card__photo">
                    <div className="card__photo-favorites">
                      <svg className="card__photo-favorites" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" >
                        <path d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <img src="/img/sneakers/sneaker-1.jpg" alt="Кроссовки" />

                  </div>
                  <p className="sneaker__info">Мужские Кроссовки Nike Air Max 270</p>

                  <div className="sneaker__current">
                    <div className="sneaker__current-item">
                      <span className="current-text-bd">Цена:</span>
                      <span className="current-item-wg">12 999 руб.</span>
                    </div>
                    <div className="sneaker__add-icon">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                      </svg>

                    </div>
                  </div>


                </li>

                <li className="sneakers__list-card">

                  <div className="card__photo">
                    <div className="card__photo-favorites">
                      <svg className="card__photo-favorites" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" >
                        <path d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <img src="/img/sneakers/sneaker-1.jpg" alt="Кроссовки" />

                  </div>
                  <p className="sneaker__info">Мужские Кроссовки Nike Air Max 270</p>

                  <div className="sneaker__current">
                    <div className="sneaker__current-item">
                      <span className="current-text-bd">Цена:</span>
                      <span className="current-item-wg">12 999 руб.</span>
                    </div>
                    <div className="sneaker__add-icon">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                      </svg>

                    </div>
                  </div>


                </li>

                <li className="sneakers__list-card">

                  <div className="card__photo">
                    <div className="card__photo-favorites">
                      <svg className="card__photo-favorites" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" >
                        <path d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <img src="/img/sneakers/sneaker-1.jpg" alt="Кроссовки" />

                  </div>
                  <p className="sneaker__info">Мужские Кроссовки Nike Air Max 270</p>

                  <div className="sneaker__current">
                    <div className="sneaker__current-item">
                      <span className="current-text-bd">Цена:</span>
                      <span className="current-item-wg">12 999 руб.</span>
                    </div>
                    <div className="sneaker__add-icon">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                      </svg>

                    </div>
                  </div>


                </li>

                <li className="sneakers__list-card">

                  <div className="card__photo">
                    <div className="card__photo-favorites">
                      <svg className="card__photo-favorites" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" >
                        <path d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <img src="/img/sneakers/sneaker-1.jpg" alt="Кроссовки" />

                  </div>
                  <p className="sneaker__info">Мужские Кроссовки Nike Air Max 270</p>

                  <div className="sneaker__current">
                    <div className="sneaker__current-item">
                      <span className="current-text-bd">Цена:</span>
                      <span className="current-item-wg">12 999 руб.</span>
                    </div>
                    <div className="sneaker__add-icon">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                      </svg>

                    </div>
                  </div>


                </li>
              </ul>
            </div>


          </div>
        </div>
      </main>
    </div>
  )
}

export default App;

