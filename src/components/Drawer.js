export default function Drawer({ onClose, items = [] }) {

    return (

        <div className="overlay" >
            <div className="drawer" >
                <h2 className="d-flex justify-between">Корзина
                    <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="btn-remove" />
                </h2>
                <div className="cartItemsBlock">
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center">
                            <img style={{ objectFit: "contain", transform: "translateY(-5px)" }}
                                className="mr-20" width={70} height={70} src={obj.imageUrl} alt="sneaker" />

                            <div className="mr-20">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="btn-remove" />
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
                </div>

            </div>
        </div>

    )
}