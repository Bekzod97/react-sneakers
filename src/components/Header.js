export default function Header() {


    return (
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
    )

}