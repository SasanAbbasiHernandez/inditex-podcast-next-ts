import { DataStateInterface } from '../interfaces/contextInterfaces';

export const INITIAL_STATE: DataStateInterface = {
    loader: true,
    searchPodcast: [],
    podcastDetail: {
      name: '',
      author: '',
      image: '',
      episodeName: '',
      episodeDescription: '',
      episodeUrl: ''
    }
};
