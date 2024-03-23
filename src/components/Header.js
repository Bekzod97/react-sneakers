import { Link } from "react-router-dom"

export default function Header(props) {


    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to={"/"}>
                <div className="d-flex align-center">
                    <img className="mr-10" width={40} height={40} src="/img/logo.png" alt="logo" />

                    <div className="headerInfo">
                        <h3 className="text-uppercase">REACT SNEAKERS</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>

            <ul className="headerRight d-flex align-center">
                <li onClick={props.onClickCart} >
                    <img className="m-5" width={20} height={20} src="/img/basket.svg" alt="basket" />
                    <span>1205 руб.</span>
                </li>
                <Link to={"/favorites"}>
                    <li>
                        <img width={20} height={20} src="/img/favorites-items.svg" alt="liked" />
                        <span>Закладки</span>
                    </li>
                </Link>
                <li>
                    <img width={20} height={20} src="/img/user.svg" alt="user" />
                    <span>Профиль</span>
                </li>
            </ul>
        </header>
    )

}