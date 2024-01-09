import { useShoppingCart } from "../context/shoppingCartContext";
import items from "../data/items.json";
import formatCurrency from "../utilities/formatCurrency";
import CartItem from "./CartItem";

type CartProps = {
  isOpen: boolean;
};

function Cart({ isOpen }: CartProps) {
  const { closeCart, cartItems, cartQuantity } = useShoppingCart();

  return (
    <>
      <div
        onClick={closeCart}
        className={`${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all ease-out w-full h-screen fixed top-0 left-0 bg-black/40`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500 ease-out bg-white w-96 absolute top-0 right-0 z-40 h-screen p-5`}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-3xl">Cart</h2>
            <div
              onClick={closeCart}
              className="w-7 h-7 hover:text-red-500 cursor-pointer transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          {cartQuantity > 0 ? (
            <div className="flex flex-col gap-5 mt-10">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <p className="font-bold text-xl text-right py-2">
                Total:{" "}
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = items.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </p>
            </div>
          ) : (
            <p className="text-xl font-bold text-center mt-10">
              Your Shopping Cart is Empty!😢
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
