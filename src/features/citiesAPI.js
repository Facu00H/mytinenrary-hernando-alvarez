import { 
  createApi, 
  fetchBaseQuery 
} from '@reduxjs/toolkit/query/react'

const citiesAPI = createApi({
  reducerPath: "citiesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),

  endpoints: (builder) => ({
    getAllCities: builder.query({ query: () =>  "/cities" })
})
})


export default citiesAPI
export const {useGetAllCitiesQuery} = citiesAPI


