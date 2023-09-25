import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HeadEnum } from 'constants/tables';

interface InitialState {
  headData: HeadEnum[];
  checkedHeadData: { [key in HeadEnum]?: boolean };
}

const initialState: InitialState = {
  headData: [],
  checkedHeadData: {},
};

export const portfolioSlice = createSlice({
  name: 'portfolioSlice',
  initialState,
  reducers: {
    setHeadData: (state, action: PayloadAction<HeadEnum[]>) => {
      state.headData = action.payload;
    },
    setCheckedHeadData: (state, action: PayloadAction<{ [key in HeadEnum]?: boolean }>) => {
      state.checkedHeadData = action.payload;
    },
  },
});

export const { setCheckedHeadData, setHeadData } = portfolioSlice.actions;

export default portfolioSlice.reducer;
