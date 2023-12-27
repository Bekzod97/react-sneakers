function Drawer() {

    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">

                <div className="drawer__wrapper">

                    <h3 className="drawer__title">
                        Корзина
                        <img src="img/delete.svg" alt="" />
                    </h3>


                    <div className="cartItems">

                        <div className="cartItem">
                            <img className="cartImg" width={70} height={70} src="img/sneakers/sneaker-1.jpg" alt="sneakers" />

                            <div>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 <span>руб.</span></b>
                            </div>
                            <img src="img/delete.svg" alt="delete" className="deleteBtn" />
                        </div>

                        <div className="cartItem">
                            <img className="cartImg" width={70} height={70} src="img/sneakers/sneaker-1.jpg" alt="sneakers" />

                            <div>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 <span>руб.</span></b>
                            </div>
                            <img src="img/delete.svg" alt="delete" className="deleteBtn" />
                        </div>

                        <div className="cartItem">
                            <img className="cartImg" width={70} height={70} src="img/sneakers/sneaker-1.jpg" alt="sneakers" />

                            <div>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 <span>руб.</span></b>
                            </div>
                            <img src="img/delete.svg" alt="delete" className="deleteBtn" />
                        </div>

                        <div className="cartItem">
                            <img className="cartImg" width={70} height={70} src="img/sneakers/sneaker-1.jpg" alt="sneakers" />

                            <div>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 <span>руб.</span></b>
                            </div>
                            <img src="img/delete.svg" alt="delete" className="deleteBtn" />
                        </div>

                        <div className="cartItem">
                            <img className="cartImg" width={70} height={70} src="img/sneakers/sneaker-1.jpg" alt="sneakers" />

                            <div>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 <span>руб.</span></b>
                            </div>
                            <img src="img/delete.svg" alt="delete" className="deleteBtn" />
                        </div>

                        <div className="cartItem">
                            <img className="cartImg" width={70} height={70} src="img/sneakers/sneaker-1.jpg" alt="sneakers" />

                            <div>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 <span>руб.</span></b>
                            </div>
                            <img src="img/delete.svg" alt="delete" className="deleteBtn" />
                        </div>

                        <div className="cartItem">
                            <img className="cartImg" width={70} height={70} src="img/sneakers/sneaker-1.jpg" alt="sneakers" />

                            <div>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 <span>руб.</span></b>
                            </div>
                            <img src="img/delete.svg" alt="delete" className="deleteBtn" />
                        </div>

                        <div className="cartItem">
                            <img className="cartImg" width={70} height={70} src="img/sneakers/sneaker-1.jpg" alt="sneakers" />

                            <div>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 <span>руб.</span></b>
                            </div>
                            <img src="img/delete.svg" alt="delete" className="deleteBtn" />
                        </div>

                        <div className="cartItem">
                            <img className="cartImg" width={70} height={70} src="img/sneakers/sneaker-1.jpg" alt="sneakers" />

                            <div>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 <span>руб.</span></b>
                            </div>
                            <img src="img/delete.svg" alt="delete" className="deleteBtn" />
                        </div>

                        <div className="cartItem">
                            <img className="cartImg" width={70} height={70} src="img/sneakers/sneaker-1.jpg" alt="sneakers" />

                            <div>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 <span>руб.</span></b>
                            </div>
                            <img src="img/delete.svg" alt="delete" className="deleteBtn" />
                        </div>

                    </div>

                    <ul className="cartTotalBlock">
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>

                        <button className="greenButton">Оформить заказ <img src="img/arrow.svg" alt="arrow" /></button>
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Drawer