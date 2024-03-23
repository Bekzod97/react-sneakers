export default function Drawer({ onClose, onRemove, items = [] }) {


    return (

        <div className="overlay" >
            <div className="drawer" >
                <h2 className="d-flex justify-between">Корзина
                    <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="btn-remove" />
                </h2>

                {items.length != 0 ?
                    <>
                        <div className="cartItemsBlock">
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem d-flex align-center">
                                    <img style={{ objectFit: "contain", transform: "translateY(-5px)" }}
                                        className="mr-20" width={70} height={70} src={obj.imageUrl} alt="sneaker" />

                                    <div className="mr-20">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="btn-remove" />
                                </div>
                            ))}

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
                        </div></> : <div className="cartEmpty">
                        <img width={120} height={120} className="cartBox" src="./img/cart.jpg" alt="" />
                        <h3>Корзина пустая</h3>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>

                        <button onClick={onClose} className="greenButton goBack">Вернуться назад
                            <img src="/img/arrowBack.svg" alt="arrow" />
                        </button>
                    </div>
                }

            </div>
        </div>

    )
}