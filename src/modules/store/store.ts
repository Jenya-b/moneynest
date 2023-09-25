import { configureStore } from '@reduxjs/toolkit';
import { isinApi } from 'modules/services/api/isin';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import portfolioReducer from './reducers/portfolioSlice';

export const store = configureStore({
  reducer: {
    [isinApi.reducerPath]: isinApi.reducer,
    portfolioReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(isinApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
