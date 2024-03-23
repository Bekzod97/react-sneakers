import React from "react";
import ContentLoader from "react-content-loader";
import cardStyles from "./Card.module.scss";

export default function Card({ id, onFavorite,
    imageUrl, title, price,
    onPlus, favorited = false,
    added = false, loading = false }) {

    const [isAdded, setIsAdded] = React.useState(added);

    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, imageUrl, title, price });
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onFavorite({ id, imageUrl, title, price })
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={cardStyles.card}>

            {loading ? <ContentLoader
                speed={2}
                width={210}
                height={260}
                viewBox="0 0 210 260"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"

            >
                <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
                <rect x="0" y="117" rx="3" ry="3" width="150" height="15" />
                <rect x="0" y="141" rx="3" ry="3" width="93" height="15" />
                <rect x="0" y="173" rx="8" ry="8" width="80" height="24" />
                <rect x="113" y="166" rx="8" ry="8" width="32" height="32" />
            </ContentLoader>
                : <>
                    <div className={cardStyles.favorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? "./img/liked.svg" : "./img/unliked.svg"} />
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
                </>
            }



        </div>



    )
} 