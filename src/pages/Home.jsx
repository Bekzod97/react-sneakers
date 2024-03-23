import Card from "../components/Card";

export default function Home({ items, cartItems, searchValue, setSearchValue, onAddToFavorite, onAddToCart, onChangeInputKey,
  onChangeSearchInput }) {

  const renderItems = () => {
    return (
      items.filter((item) => item.title.toLowerCase().includes(searchValue))
        .map((value, index) => (<Card
          key={index}
          id={value.id}
          title={value.title}
          price={value.price}
          imageUrl={value.imageUrl}
          onFavorite={(obj) => onAddToFavorite(obj)}
          onPlus={(obj) => onAddToCart(obj)}
          added={cartItems.some(obj => Number(obj.id) == Number(value.id))}
          loading={true}
        />))
    )
  }
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 style={searchValue ? { fontSize: "14px" } : { fontSize: "24px" }}> {searchValue ? `Поиск по тексту:  ${searchValue}` : `Все кроссовки`} </h1>
        <div className="search-block d-flex align-center">
          <img width={14} height={14} src="/img/search.svg" alt="search" />

          {searchValue && <img onClick={() => setSearchValue("")} width={22} height={22} className="clearInput removeBtn" src="/img/btn-remove.svg" alt="btn-remove" />}

          <input onKeyUp={onChangeInputKey} onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск" />
        </div>
      </div>

      <div className="sneakers d-flex">

        {console.log(cartItems)}
        {renderItems()}
      </div>
    </div>
  )
}