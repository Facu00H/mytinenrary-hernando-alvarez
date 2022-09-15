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
          getAllCities: builder.query({ query: () =>  "/cities" }),


///////////////////////////post Methods user/////////////////////////////////
      AddUserSignUp: builder.mutation({
        query: (payload) => ({
          url: '/auth/signup',
          method: 'POST',
          body: payload,
        }),          
      }),

      AddUserSignIn: builder.mutation({
        query: (payload) => ({
          url: '/auth/signin',
          method: 'POST',
          body: payload,
        }),          
      }),

      AddUserSignOut: builder.mutation({
        query: (payload) => ({
          url: '/auth/signout',
          method: 'POST',
          body: payload,
        }),         
      }),

}),

})


export default citiesAPI
export const {useGetAllCitiesQuery, useAddUserSignInMutation,useAddUserSignOutMutation,useAddUserSignUpMutation} = citiesAPI


