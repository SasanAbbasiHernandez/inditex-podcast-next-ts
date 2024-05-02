import { SimplePodcast } from '@/interfaces/podcastApiCallsInterfaces';
import { DataStateInterface, PagePropsodcastDetail } from '../interfaces/contextInterfaces';

type DataAction =
  | { type: 'addSearchPodcast';  payload: SimplePodcast[] }
  | { type: 'addPodcastDetail';  payload: PagePropsodcastDetail }
  | { type: 'beginLoading'; }
  | { type: 'finishLoading'; };

export const dataReducer = (
  state: DataStateInterface,
  action: DataAction
): DataStateInterface => {
  switch (action.type) {

    case 'addSearchPodcast':
      return {
        ...state,
        searchPodcast: action.payload,
      };

    case 'addPodcastDetail':
      return {
        ...state,
        podcastDetail: action.payload,
      };

    case 'beginLoading':
      return {
        ...state,
        loader: true,
      };

    case 'finishLoading':
      return {
        ...state,
        loader: false,
      };

    default:
      return state;
  }
};
