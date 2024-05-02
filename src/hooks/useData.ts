import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

export const useData = () => {
  const {
    dataState,
    addSearchPodcast,
    beginLoading,
    finishLoading,
    addPodcastDetail
  } = useContext(AppContext);

  const { loader, searchPodcast, podcastDetail } =
    dataState;

  return {
    loader: loader,
    searchPodcast: searchPodcast,
    podcastDetail: podcastDetail,
    addSearchPodcast,
    beginLoading,
    finishLoading,
    addPodcastDetail
  };
};
