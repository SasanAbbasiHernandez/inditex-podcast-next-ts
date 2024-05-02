import { createContext } from 'react';

import { DataStateInterface, PagePropsodcastDetail } from '../interfaces/contextInterfaces';
import { SimplePodcast } from '@/interfaces/podcastApiCallsInterfaces';

export type AppContextProps = {
  dataState: DataStateInterface;
  addSearchPodcast: (podcasts: SimplePodcast[]) => void;
  addPodcastDetail: (podcastsDetail: PagePropsodcastDetail) => void;
  beginLoading: () => void;
  finishLoading: () => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
