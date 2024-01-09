type CartItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function CartItem(item: CartItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1 items-center">
        <img className="w-32 h-20 object-cover" src={item.imgUrl} alt="" />
        <div>
          <p className="text-lg font-medium">
            {item.name} <span className="text-gray-500 text-sm">x3</span>
          </p>
          <p className="text-gray-500 font-medium">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-lg font-medium">${item.price}</p>
        <button className="w-5 h-5 border text-red-500 transition hover:bg-red-500 hover:text-white">
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
        </button>
      </div>
    </div>
  );
}

export default CartItem;
