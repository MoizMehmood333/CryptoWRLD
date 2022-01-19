import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '570363dbfcmsh0bb72ccd56384f4p1d0acejsn85f25f71ed7f'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequset = (url) => ({url, headers : cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) =>createRequset(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })


})


export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi;