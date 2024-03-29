import { useShoppingCart } from "../context/shoppingCartContext";
import items from "../data/items.json";
import formatCurrency from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = items.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="flex items-end sm:items-center justify-between">
      <div className="flex gap-1 items-start sm:items-center">
        <img className="w-32 h-20 object-cover" src={item.imgUrl} alt="" />
        <div>
          <p className="text-lg font-medium">
            {item.name}{" "}
            {quantity > 1 && (
              <span className="text-gray-500 text-sm">x{quantity}</span>
            )}
          </p>
          <p className="text-gray-500 font-medium">
            {formatCurrency(item.price)}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-lg font-medium">
          {formatCurrency(item.price * quantity)}
        </p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="w-5 h-5 border text-red-500 transition hover:bg-red-500 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
