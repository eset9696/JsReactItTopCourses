import { create } from "zustand";

const useProducts = create((set, get) => {
  let products;

  const storedCart = JSON?.parse(localStorage?.getItem("cart")) || [];

  const addToCart = (product) => {
    let cart = [...get().cart];

    const findedProduct = cart.find((element) => element.id === product.id);
    if (findedProduct) {
      findedProduct.quantity++;
    } else {
      cart = [...cart, { ...product, quantity: 1 }];
    }
    const updatedCart = cart;

    localStorage?.setItem("cart", JSON?.stringify(updatedCart));

    set({ cart: updatedCart });
  };

  const removeFromCart = (id) => {
    const updatedCart = get()?.cart?.filter((product) => product?.id !== id);
    localStorage?.setItem("cart", JSON?.stringify(updatedCart));
    set({ cart: updatedCart });
  };

  return {
    products,
    cart: storedCart,
    addToCart,
    removeFromCart,
  };
});

export default useProducts;
