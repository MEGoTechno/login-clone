import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// git push -u origin main   
const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DB_URI + '/api',
    credentials: 'include',
});

export const apiSlice = createApi({
    reducerPath: "api", //from state
    baseQuery,
    endpoints: builder => ({ // client fcs #########
        makeReq: builder.query({
            query: (params) => {
                // console.log('working api ...')
                return {
                    url: `/data`,
                    params
                }
            }
        }),
        login: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: (body) => ({
                url: `/elbadr`,
                method: 'post',
                body: body,
            }),
        })
    })
})

export const {
    useLoginMutation
} = apiSlice
