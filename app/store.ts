import { configureStore, createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {state.value += 1}
  }
})

export const {increment} = counterSlice.actions

export const routeLoading = createSlice({
  name: 'routeLoading',
  initialState: {
    value: false
  },
  reducers: {
    isLoading: state => {state.value = true},
    notLoading: state => {state.value = false}
  }
})

export const {isLoading, notLoading} = routeLoading.actions

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    routeLoading: routeLoading.reducer
  },
  devTools: process.env.NODE_ENV === 'development',
})
