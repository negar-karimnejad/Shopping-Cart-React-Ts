import StoreItem from "../components/StoreItem";
import items from "../data/items.json";

function Store() {
  return (
    <div>
      <h1 className="font-bold text-3xl my-5">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {items.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Store;
