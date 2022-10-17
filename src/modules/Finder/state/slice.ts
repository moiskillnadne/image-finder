import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFinderState {
  search: string;
  requestData: RequestData;
  images: IImageResult[];
}

export interface IImageResult {
  accentColor: string;
  contentSize: string;
  contentUrl: string;
  datePublished: string;
  encodingFormat: string;
  height: number;
  hostPageDiscoveredDate: string;
  hostPageDisplayUrl: string;
  hostPageUrl: string;
  imageId: string;
  imageInsightsToken: string;
  insightsMetadata: Record<string, number>;
  isFamilyFriendly: boolean;
  name: string;
  thumbnail: {
    height: number;
    width: number;
  };
  thumbnailUrl: string;
  webSearchUrl: string;
  width: number;
}

interface RequestData {
  processing: boolean;
  resultsBySearch: string;
}

const initialState = {
  search: '',
  requestData: {
    processing: false,
    resultsBySearch: '',
  },
  images: [],
} as IFinderState;

const finderSlice = createSlice({
  name: 'finder',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setResults: (state, action: PayloadAction<IImageResult[]>) => {
      state.images = action.payload;
    },
    setRequestProcessing: (state, action: PayloadAction<boolean>) => {
      state.requestData.processing = action.payload;
    },
    setResultsBySearch: (state, action: PayloadAction<string>) => {
      state.requestData.resultsBySearch = action.payload;
    },
    clearSearch: state => {
      state.search = '';
      state.requestData.resultsBySearch = '';
    },
    clearImages: state => {
      state.images = [];
    },
  },
});

export const {
  setSearch,
  setResults,
  setRequestProcessing,
  setResultsBySearch,
  clearImages,
  clearSearch,
} = finderSlice.actions;

export default finderSlice;
