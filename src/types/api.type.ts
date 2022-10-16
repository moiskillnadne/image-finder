import { IImageResult } from '../modules/Finder/state/slice';

export interface ApiResponse {
  currentOffset: number;
  instrumentation: {
    _type: string;
  };
  nextOffset: number;
  pivotSuggestions: unknown;
  queryContext: {
    alterationDisplayQuery: string;
    alterationMethod: string;
    alterationOverrideQuery: string;
    alterationType: string;
    originalQuery: string;
  };
  queryExpansions: unknown;
  readLink: string;
  relatedSearches: unknown;
  totalEstimatedMatches: number;
  value: IImageResult[];
  webSearchUrl: string;
  _type: string;
}
