function ShopItem(props) {
  const { name, price, color, img } = props.product;

  return (
    <div className="ShopItem">
      <img
        src={img}
        style={{
          width: 150,
          backgroundRepeat: "no-repeat",
        }}
      />
      <h1 className="ItemName">{name}</h1>
      <h4 className="ItemColor">{color}</h4>

      <p className="ItemPrice">${price}</p>
      <button className="ItemButton">Add to cart</button>
    </div>
  );
}

export default ShopItem;
