import React from "react";
import cardStyles from "./Card.module.scss";

export default function Card(props) {

    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(true)
    }

    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.favorite} onClick={props.onFavorite}>
                <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} src={props.imageUrl} alt="sneaker-1" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{props.price} руб</b>
                </div>

                <img className={cardStyles.plus}
                    onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                    alt="plus"
                />

            </div>
        </div>
    )
} 