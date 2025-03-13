import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IRecommendation} from './types';

export const contentAPI = createApi({
  reducerPath: 'contentAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://picsum.photos/v2/'}),
  endpoints: build => ({
    fetchAllRecommendations: build.query<IRecommendation[], number>({
      query: (limit: number = 2) => ({
        url: 'list',
        params: {
          limit,
        },
      }),
    }),
  }),
});

export const {useFetchAllRecommendationsQuery} = contentAPI;
