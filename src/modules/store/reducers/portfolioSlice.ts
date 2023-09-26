import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HeadEnum } from 'constants/tables';

interface InitialState {
  mapHeadData: HeadEnum[];
  positionsHeadData: HeadEnum[];
  checkedMapHeadData: { [key in HeadEnum]?: boolean };
  checkedPositionsHeadData: { [key in HeadEnum]?: boolean };
}

const initialState: InitialState = {
  mapHeadData: [],
  positionsHeadData: [],
  checkedMapHeadData: {},
  checkedPositionsHeadData: {},
};

export const portfolioSlice = createSlice({
  name: 'portfolioSlice',
  initialState,
  reducers: {
    setMapHeadData: (state, action: PayloadAction<HeadEnum[]>) => {
      state.mapHeadData = action.payload;
    },
    setCheckedMapHeadData: (state, action: PayloadAction<{ [key in HeadEnum]?: boolean }>) => {
      state.checkedMapHeadData = action.payload;
    },
    setPositionsHeadData: (state, action: PayloadAction<HeadEnum[]>) => {
      state.positionsHeadData = action.payload;
    },
    setCheckedPositionsHeadData: (
      state,
      action: PayloadAction<{ [key in HeadEnum]?: boolean }>
    ) => {
      state.checkedPositionsHeadData = action.payload;
    },
  },
});

export const {
  setCheckedMapHeadData,
  setMapHeadData,
  setCheckedPositionsHeadData,
  setPositionsHeadData,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
