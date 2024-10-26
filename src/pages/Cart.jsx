import useProducts from "../store/useProducts";
import { Link } from "react-router-dom";
import useDisclosure from "../hooks/useDisclosure";
import Alert from "../components/ui/Alert/Alert";

const Cart = () => {
  const { cart, removeFromCart } = useProducts();

  const alertData = useDisclosure({});

  const handleDeleteFromCart = (id) => {
    removeFromCart(id);
    alertData?.onOpen();
  }

  return (
    <section className="cart">
      <div className="max-w-7xl mx-auto px-2">
        <Link
          to="/cards"
          className="text-indigo-500 hover:text-indigo-600 mb-8 inline-flex"
        >
          Go to page Cards
        </Link>
        <div className="flex justify-between items-start">
          <h2 className="mb-4 text-4xl font-bold text-zinc-800">
            {cart?.length ? "Previously saved products" : "Cart is empty"}
          </h2>
          {cart?.length > 0 && (
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
        )}
        </div>
        
        {cart?.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {cart?.map((item) => (
              <div
                key={item?.id}
                className="border rounded shadow p-4 max-w-3xl relative"
              >
                <button
                  onClick={() => handleDeleteFromCart(item?.id)}
                  className="absolute top-4 right-4"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#4B5563"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="flex items-start">
                  <img
                    src={item?.imgSrc}
                    alt={item?.title}
                    className="w-48 h-48 mr-4 object-cover bg-indigo-500"
                  />
                  <div className="flex flex-col items-start w-full">
                    <h3 className="text-xl font-bold mb-4">{item?.name}</h3>
                    <p className="text-gray-600 mb-4">{item?.description}</p>
                    <span className="text-lg font-bold mb-4">
                      {item?.price}$
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Alert  title="Товар удален из корзины!" isOpen={alertData?.isOpen} onClose={alertData?.onClose} variant="success"/>
    </section>
  );
};

Cart.displayName = "Cart";

export default Cart;
