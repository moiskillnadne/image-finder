import { useAppSelector } from './useAppSelector';
import { useEffect, useCallback } from 'react';
import {
  clearImages,
  clearSearch,
  IImageResult,
  setRequestProcessing,
  setResults,
  setResultsBySearch,
  setSearch,
} from '../modules/Finder/state/slice';
import { useAppDispatch } from './useAppDispatch';
import { ApiResponse } from '../types/api.type';
import { Environment } from '../constants/environment.constnts';

const requestUrl = process.env[Environment.RequestUrl] || '';

const options: RequestInit = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env[Environment.RapidApiKey] || '',
    'X-RapidAPI-Host': process.env[Environment.RapidApiHost] || '',
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

  const clearSearchAndImagesState = useCallback(() => {
    dispath(clearSearch());
    dispath(clearImages());
  }, [dispath]);

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
    clearSearchAndImagesState,
  };
};
