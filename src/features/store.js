import { configureStore } from '@reduxjs/toolkit'
import citiesAPI from './citiesAPI'

export default configureStore({
  reducer: {
    [citiesAPI.reducerPath] : citiesAPI.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(citiesAPI.middleware),
})

