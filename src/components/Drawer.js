export default function Drawer() {

    return (

        <div style={{ display: "none" }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between">Корзина
                    <img className="cu-p" src="/img/btn-remove.svg" alt="btn-remove" />
                </h2>
                <div className="cartItemsBlock">
                    <div className="cartItem d-flex align-center">
                        <img style={{ objectFit: "contain", transform: "translateY(-5px)" }}
                            className="mr-20" width={70} height={70} src="/img/sneakers/sneaker-1.png" alt="sneaker" />

                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="btn-remove" />
                    </div>

                    <div className="cartItem d-flex align-center">
                        <img style={{ objectFit: "contain", transform: "translateY(-5px)" }}
                            className="mr-20" width={70} height={70} src="/img/sneakers/sneaker-3.png" alt="sneaker" />

                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="btn-remove" />
                    </div>

                    <div className="cartItem d-flex align-center">
                        <img style={{ objectFit: "contain", transform: "translateY(-5px)" }}
                            className="mr-20" width={70} height={70} src="/img/sneakers/sneaker-2.png" alt="sneaker" />

                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="btn-remove" />
                    </div>

                    <div className="cartItem d-flex align-center">
                        <img style={{ objectFit: "contain", transform: "translateY(-5px)" }}
                            className="mr-20" width={70} height={70} src="/img/sneakers/sneaker-2.png" alt="sneaker" />

                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="btn-remove" />
                    </div>

                </div>


                <div className="cartTotalBlock">
                    <ul >
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>

                        <li className="d-flex">
                            <span>Налог 5%::</span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ
                        <img src="/img/arrow.svg" alt="arrow" />
                    </button>
                </div>

            </div>
        </div>

    )
}