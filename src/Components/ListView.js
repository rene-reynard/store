import ShopItem from "./ShopItem";

function ListView(props) {
  const { products } = props;
  return (
    <div className="ListView">
      {products.map((product, index) => (
        <ShopItem key={index} product={product} />
      ))}
    </div>
  );
}

export default ListView;
