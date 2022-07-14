import ShopCard from "./ShopCard";

function CardsView(props) {
  const { products } = props;
  return (
    <div className="CardsView">
      {products.map((product, index) => (
        <ShopCard key={index} product={product} />
      ))}
    </div>
  );
}

export default CardsView;
