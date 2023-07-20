import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

interface IRequest {
  search: string;
}
export interface IResponse {
  name: string;
  country: string;
  isin: string;
  figi: string;
  currency: string;
  symbol: string;
}

export const isinApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    getDataTable: builder.query<IResponse[], IRequest>({
      query: ({ search }) => ({
        url: 'table.json',
        params: { search },
      }),
    }),
  }),
});
