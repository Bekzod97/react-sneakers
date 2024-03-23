import Card from "../components/Card";

export default function Favorites({ items, onAddToFavorite }) {

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1> Мои закладки </h1>
      </div>

      <div className="sneakers d-flex">

        {items.map((value, index) => (<Card
          key={index}
          title={value.title}
          price={value.price}
          imageUrl={value.imageUrl}
          favorited={true}
          onFavorite={onAddToFavorite}
          id={value.id}
        />))}
      </div>
    </div>
  )
}