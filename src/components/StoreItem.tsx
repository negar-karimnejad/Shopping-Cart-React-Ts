import { useShoppingCart } from "../context/shoppingCartContext";
import formatCurrency from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem(item: StoreItemProps) {
  const {
    incrementCartQuantity,
    itemQuantity,
    removeFromCart,
    decrementCartQuantity,
  } = useShoppingCart();
  const quantity = itemQuantity(item.id);

  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white pb-5">
      <img className="h-48 w-full object-cover" src={item.imgUrl} alt="" />
      <div className="flex items-center justify-between p-5">
        <p className="text-2xl font-semibold">{item.name}</p>
        <p className="text-2xl text-gray-700">{formatCurrency(item.price)}</p>
      </div>
      {quantity === 0 ? (
        <div className="mx-5">
          <button
            onClick={() => incrementCartQuantity(item.id)}
            className="bg-sky-600 cursor-pointer rounded-md font-bold text-lg text-white text-center w-full py-2"
          >
            + Add To Cart
          </button>
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <div className="flex items-center gap-2">
            <button
              onClick={() => decrementCartQuantity(item.id)}
              className="w-7 h-7 cursor-pointer bg-sky-600 rounded-sm font-bold text-lg text-white"
            >
              -
            </button>
            <p className="font-medium">
              <span className="font-bold cursor-pointer text-gray-800 text-2xl">
                {quantity}
              </span>{" "}
              in cart
            </p>
            <button
              onClick={() => incrementCartQuantity(item.id)}
              className="w-7 h-7 bg-sky-600 rounded-sm font-bold text-lg text-white"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="w-fit h-7 cursor-pointer mt-2 px-2 bg-red-600 rounded-sm text-white"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

export default StoreItem;
