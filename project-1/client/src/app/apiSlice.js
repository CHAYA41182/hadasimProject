import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:7002/api',
        credentials: 'include',
    }),
    endpoints: () => ({}),
});

export default apiSlice;