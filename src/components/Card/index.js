import cardStyles from "./Card.module.scss";

console.log(cardStyles);

export default function Card(props) {

    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.favorite}>
                <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} src={props.imageUrl} alt="sneaker-1" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{props.price} руб</b>
                </div>
                <button className="button" onClick={props.onClick}>
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    )
}