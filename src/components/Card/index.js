import React, { useState } from "react";
import cardStyles from "./Card.module.scss";

export default function Card({ onFavorite, imageUrl, title, price, onPlus }) {

    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({imageUrl, title, price});
        setIsAdded(!isAdded)
    }

    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.favorite} onClick={onFavorite}>
                <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} src={imageUrl} alt="sneaker-1" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{price} руб</b>
                </div>

                <img className={cardStyles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "./img/btn-checked.svg" : "./img/btn-plus.svg"}
                    alt="plus"
                /> 
            </div>
        </div>
    )
} 