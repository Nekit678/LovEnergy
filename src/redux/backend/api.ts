import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { AuthMeData, RegRequest, ServerResponse, RegData, AutoData, AutoRequest } from './../../models/models';


export const serverApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/"
    }),
    
    endpoints: build => ({
        authMe: build.query<ServerResponse<AuthMeData>, null>({
            query: () => ({
                url: 'AuthMe',
                credentials: "include"
            })
        }),
        
        registration: build.mutation<ServerResponse<RegData>, RegRequest>({
            query: (data)=>({
                url: "Registration",
                method: 'POST',
                body:data,
                credentials: "include"
            })
        }),

        autorisation: build.mutation<ServerResponse<AutoData>, AutoRequest>({
            query: (data)=>({
                url: "Autorisation",
                method: 'POST',
                body:data,
                credentials: "include"
            })
        })
    })
})


export const { useAuthMeQuery, useRegistrationMutation, useAutorisationMutation } = serverApi