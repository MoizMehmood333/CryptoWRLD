import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '570363dbfcmsh0bb72ccd56384f4p1d0acejsn85f25f71ed7f'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequset = (url) => ({url, headers : cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query:(count) => createRequset(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequset(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timeperiod})=>createRequset(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        })
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;