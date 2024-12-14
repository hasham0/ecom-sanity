import { CartStateTS, CartTS } from "@/types";
import { persist, devtools } from "zustand/middleware";
import { createStore } from "zustand";

export const initalCartState: CartStateTS = {
  items: [],
};

const createCartStore = () => {
  return createStore<CartTS>()(
    devtools(
      persist(
        (set, get) => ({
          items: [],
          addItem(product) {
            return set((state) => {
              const isItemExist = state.items.find(
                (item) => item.product._id === product._id,
              );
              if (isItemExist) {
                return {
                  items: state.items.map((item) =>
                    item.product._id === product._id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item,
                  ),
                };
              } else {
                return {
                  items: [...state.items, { product, quantity: 1 }],
                };
              }
            });
          },
          removeItem(productID) {
            console.log("🚀 ~ removeItem ~ productID:", productID);
            return set((state) => ({
              items: state.items.reduce((acc, item) => {
                // if (item.product._id === productID) {
                //   if (item.quantity > 1) {
                //     // acc.push({
                //     //   ...item,quantity:item.quantity-1
                //     // })
                //     // state.items.push({
                //     //   ...item,
                //     //   quantity: item.quantity - 1,
                //     // });
                //     console.log("1");
                //   }
                // } else {
                //   //acc.push(item)
                //   console.log("2");
                //   //   state.items.push(item);
                // }
                //      return acc;
              }, []),
            }));
          },
          deleteCartProduct(productID) {
            return set((state) => ({
              items: state.items.filter(
                (item) => item.product._id !== productID,
              ),
            }));
          },
          resetCart() {
            return set({ items: [] });
          },
          getTotalPrice() {
            return get().items.reduce(
              (total, items) =>
                total + (items.product.price ?? 0) * items.quantity,
              0,
            );
          },
          getSubTotalPrice() {
            return get().items.reduce((total, item) => {
              const price = item.product.price ?? 0;
              const discount = ((item.product.discount ?? 0) * price) / 100;
              const discountedPrice = price + discount;
              return total + discountedPrice * item.quantity;
            }, 0);
          },
          getItemCount(productID) {
            const item = get().items.find(
              (item) => item.product._id === productID,
            );

            //    console.log("🚀 ~ getItemCount ~ item:", item?.quantity);
            return item ? item.quantity : 0;
          },
          getGroupedItems() {
            return get().items;
          },
        }),
        { name: "cart-store" },
      ),
    ),
  );
};
export { createCartStore };
