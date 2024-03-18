import { PayloadAction, createSlice, current } from '@reduxjs/toolkit'
import data from '../../dataset.json'
import sdgs from '../../sdgsDataSet.json'

export type ListItemProp = {
  id: number
  name: string
  country: string
  image: string
  price_per_ton: number
  offered_volume_in_tons: number
  distribution_weight: number
  supplier_name: string
  earliest_delivery: string
  sdgs: number[]
  description: string
}
export type CardType = ListItemProp & { count: number }

export type DeleteType = { id: number; count: number }

export const initialState = {
  list: data as ListItemProp[],
  sdgsGoals: sdgs,
  cart: [] as CardType[],
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CardType>) => {
      if (state.cart.length > 0) {
        const obj = current(state).cart.find((item) => item.id === action.payload.id)

        if (obj) {
          const arr = current(state).cart.map((item) =>
            item.id === action.payload.id ? { ...item, count: item.count + action.payload.count } : item,
          )

          state.cart = arr
        } else {
          state.cart = [...state.cart, action.payload]
        }
      } else {
        state.cart = [action.payload]
      }
    },

    deleteItem: (state, action: PayloadAction<DeleteType>) => {
      const arr = current(state).cart.filter((item) => item.id != action.payload.id)
      state.cart = arr
    },

    deleteAll: (state) => {
      state.cart = []
    },

    updateItem: (state, action: PayloadAction<CardType>) => {
      const arr = current(state).cart.map((item) => (item.id === action.payload.id ? action.payload : item))
      state.cart = arr
    },
  },
})

export const { addItem, deleteItem, deleteAll, updateItem } = mainSlice.actions

export default mainSlice.reducer
