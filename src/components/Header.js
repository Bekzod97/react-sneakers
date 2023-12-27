function Header() {

    return (
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
    )
}

export default Header