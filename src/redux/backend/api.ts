import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { AuthMeData, RegRequest, ServerResponse, RegData, AutoData, AutoRequest, getPostsRequest, PostData, getPostsData, sendPostRequest } from './../../models/models';


export const serverApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/"
    }),
    tagTypes: ["Auth"],
    endpoints: build => ({
        authMe: build.query<ServerResponse<AuthMeData>, null>({
            query: () => ({
                url: 'AuthMe',
                credentials: "include"
            })
        }),
        getPosts: build.query<ServerResponse<getPostsData>, getPostsRequest>({
            query: ({page,profile_id}) => ({
                url: `getPosts?id=${profile_id}&page=${page}`,
                credentials: "include"
            })
        }),
        registration: build.mutation<ServerResponse<RegData>, RegRequest>({
            query: (data) => ({
                url: "Registration",
                method: 'POST',
                body: data,
                credentials: "include"
            })
        }),
        sendPost: build.mutation<ServerResponse<PostData>, sendPostRequest>({
            query: (data) => ({
                url: "/sendPost",
                method: 'PUT',
                body: data,
                credentials: "include"
            })
        }),
        autorisation: build.mutation<ServerResponse<AutoData>, AutoRequest>({
            query: (data) => ({
                url: "Autorisation",
                method: 'POST',
                body: data,
                credentials: "include"
            })
        }),
        logout: build.mutation<ServerResponse<null>, null>({
            query: () => ({
                url: 'Logout',
                method: 'DELETE',
                credentials: "include"
            })
        })
    })
})


export const { useAuthMeQuery, useGetPostsQuery, useSendPostMutation, useLogoutMutation, useRegistrationMutation, useAutorisationMutation } = serverApi