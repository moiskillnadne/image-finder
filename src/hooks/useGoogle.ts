import { useAppSelector } from './useAppSelector';
import { useEffect, useCallback } from 'react';
import {
  IImageResult,
  setRequestProcessing,
  setResults,
  setResultsBySearch,
  setSearch,
} from '../modules/Finder/state/slice';
import { useAppDispatch } from './useAppDispatch';
import { ApiResponse } from '../types/api.type';
const requestUrl = 'https://bing-image-search1.p.rapidapi.com/images/search';

const options: RequestInit = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '22bc6256b9mshc49168ac250da5ep1943a6jsnaa4b1d107170',
    'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
  },
};

export const findAndSaveImageBySearchParams = async (
  search: string,
  callback: (images: IImageResult[]) => void,
) => {
  const searchParam = search ? `q=${search}` : '';

  const imageResult = await fetch(`${requestUrl}?${searchParam}`, options);
  const imageJson = (await imageResult.json()) as ApiResponse;

  const images = imageJson.value;
  callback(images);
};

export const useGoogle = () => {
  const dispath = useAppDispatch();

  const search = useAppSelector(state => state.finder.search);
  const images = useAppSelector(state => state.finder.images);
  const requestProcessing = useAppSelector(state => state.finder.requestData.processing);
  const resultsBySearch = useAppSelector(state => state.finder.requestData.resultsBySearch);

  const saveSearch = useCallback(
    (searchValue: string) => {
      dispath(setSearch(searchValue));
    },
    [dispath],
  );
  const changeRequestProcessingStatus = useCallback(
    (status: boolean) => {
      dispath(setRequestProcessing(status));
      dispath(setResultsBySearch(search));
    },
    [dispath, search],
  );

  const saveImageResults = useCallback(
    (images: IImageResult[]) => {
      dispath(setResults(images));
      changeRequestProcessingStatus(false);
    },
    [dispath, changeRequestProcessingStatus],
  );

  useEffect(() => {
    if (requestProcessing) {
      findAndSaveImageBySearchParams(search, saveImageResults);
    }
  }, [search, saveImageResults, requestProcessing]);

  return {
    search,
    resultsBySearch,
    images,
    saveSearch,
    changeRequestProcessingStatus,
  };
};
