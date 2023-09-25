import { RootState } from '../store';

export const portfolioSelector = (state: RootState) => state.portfolioReducer;
