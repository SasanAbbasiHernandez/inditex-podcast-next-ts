'use client';

import { useReducer } from 'react';

import { AppContext } from './AppContext';
import { dataReducer } from './DataReducer';
import { INITIAL_STATE } from './InitialState';
import { SimplePodcast } from '@/interfaces/podcastApiCallsInterfaces';
import { PagePropsodcastDetail } from '@/interfaces/contextInterfaces';

interface props {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

export const AppProvider = ({ children }: props) => {
  const [dataState, dispatch] = useReducer(dataReducer, INITIAL_STATE);

  const addSearchPodcast = (podcast: SimplePodcast[]) => {
    dispatch({ type: 'addSearchPodcast', payload: podcast });
  };

  const addPodcastDetail = (podcastDetail: PagePropsodcastDetail) => {
    dispatch({ type: 'addPodcastDetail', payload: podcastDetail });
  };

  const beginLoading = () => {
    dispatch({ type: 'beginLoading' });
  };

  const finishLoading = () => {
    dispatch({ type: 'finishLoading'});
  };

  return (
    <AppContext.Provider
      value={{
        dataState,
        addSearchPodcast,
        beginLoading,
        finishLoading,
        addPodcastDetail
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
