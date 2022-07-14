function ShopCard(props) {
  const { name, price, color, img } = props.product;

  return (
    <div
      className="ShopCard"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "100%, 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="CardName">{name}</h1>
      <h4 className="CardColor">{color}</h4>
      <div className="CardBuy">
        <p className="CardPrice">${price}</p>
        <button className="CardButton">Add to cart</button>
      </div>
    </div>
  );
}

export default ShopCard;
