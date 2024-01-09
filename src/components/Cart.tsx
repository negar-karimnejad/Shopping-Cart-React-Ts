import items from "../data/items.json";
import CartItem from "./CartItem";

function Cart() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-black/40">
      <div className="bg-white w-96 absolute top-0 right-0 z-40 h-screen p-5">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-3xl">Cart</h2>
          <div className="w-7 h-7 hover:text-red-500 cursor-pointer transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-10">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <p className="font-bold text-xl text-right py-2">Total: $1,402,00</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
