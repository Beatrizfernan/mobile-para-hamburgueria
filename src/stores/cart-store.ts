import { create } from "zustand";
import { ProductProps } from "@/utils/data/products";
import * as cartinMemory from "../stores/helpers/cart-in-memory"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ProductCartProps = ProductProps &
{
    quantity: number

}





type StateProps = {
    products: ProductCartProps[]
    add: (product: ProductProps) => void
    remove: (productId: string) => void
    clear: () => void
}

export const useCartStore = create(
    persist<StateProps>((set) => ({
        products: [],
        add: (product: ProductProps) => set((state) => ({
            products: cartinMemory.add(state.products, product)
        })
        ),
        remove: (productId: string) =>
            set((state) => ({
                products: cartinMemory.remove(state.products, productId),
            })),
        clear: () => set(() => ({ products: [] }))

    }), {
        name: "nlw-expert:cart",
        storage: createJSONStorage(() => AsyncStorage)
    }))