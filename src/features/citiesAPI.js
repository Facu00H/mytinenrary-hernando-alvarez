import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

const citiesAPI = createApi({
  reducerPath: "citiesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  ////////////////////////////////////////Get methods//////////////////////////////////////////////////


  endpoints: (builder) => ({/////////////////cieties//////////////////////////////////////////////
    getAllCities: builder.query({ query: (params) => `/cities/${params}` }),



    ///////////////////////////////////////////itineraries//////////////////////////////////////////
    GetIdItineraries: builder.query({ query: (id) => `/itineraries/city/${id}` }),



    GetItinerariesUser: builder.query({ query: (user) => `/itineraries/user/${user}` }),


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
    /////////////////////////////////////////////////////Details
    CreateItinerary: builder.mutation({
      query: (payload) => ({
        url: '/itineraries',
        method: 'POST',
        body: payload,
      }),
    }),
    //////////////////////////////////////////itineraries
    EditItinerary: builder.mutation({
      query: (payload) => ({
        url: `/itineraries/${payload.id}`,
        method: 'PATCH',
        body: payload,
      }),
    }),
    RemoveItinerary: builder.mutation({
      query: (payload) => ({
        url: `/itineraries/${payload}`,
        method: 'DELETE',
      }),
    }),
    //////////////////////////////////////////////comment
    EditItinerary: builder.mutation({
      query: (payload) => ({
        url: `/comment/${payload.id}`,
        method: 'PATCH',
        body: payload,
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      }),
    }),
    RemoveItinerary: builder.mutation({
      query: (payload) => ({
        url: `/comment/${payload}`,
        method: 'DELETE',
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      }),
    }),

    CreateItinerary: builder.mutation({
      query: (payload) => ({
        url: '/comment',
        method: 'POST',
        body: payload,
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      }),
    }),
    ///////////////////////////////////////////////like
    AddLike: builder.mutation({
      query: (payload) => ({
        url: `/itineraries/like/${payload}`,
        method: 'PATCH',
        headers: { "Authorization": 'Bearer ' + localStorage.getItem("token") }
      }),
    }),
    ///////////////////////////////////////////////comment
    EditComment: builder.mutation({
      query: (payload) => ({
        url: `comments/${payload.id}`,
        method: 'PATCH',
        body: payload,
        headers: { "Authorization": 'Bearer ' + localStorage.getItem("token") }
      }),
    }),

    RemoveComment: builder.mutation({
      query: (payload) => ({
        url: `/comments/${payload}`,
        method: 'DELETE',
        headers: { "Authorization": 'Bearer ' + localStorage.getItem("token") }
      }),
    }),

    CreateComment: builder.mutation({
      query: (payload) => ({
        url: '/comments',
        method: 'POST',
        body: payload,
        headers: { "Authorization": 'Bearer ' + localStorage.getItem("token") }
      }),
    }),

  }),

})


export default citiesAPI
export const { useGetAllCitiesQuery, useRemoveItineraryMutation, useGetIdItinerariesQuery, useEditItineraryMutation, useCreateItineraryMutation, useGetItinerariesUserQuery, useAddUserSignInMutation, useAddUserSignOutMutation, useAddUserSignUpMutation, useAddLikeMutation, useEditCommentMutation, useRemoveCommentMutation, useCreateCommentMutation } = citiesAPI


