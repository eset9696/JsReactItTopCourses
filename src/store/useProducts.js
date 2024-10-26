import { create } from "zustand";

const useProducts = create((set, get) => {
  let products;

  const storedCart = JSON?.parse(localStorage?.getItem("cart")) || [];

  const addToCart = (product) => {
    const updatedCart = [...get().cart, { ...product, quantity: 1 }];

    localStorage?.setItem("cart", JSON?.stringify(updatedCart));

    set({ cart: updatedCart });
  };

  const removeFromCart = (id) => {
    const updatedCart = get()?.cart?.filter((product) =>  product?.id !== id);
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
