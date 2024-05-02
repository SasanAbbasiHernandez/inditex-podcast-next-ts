import { SimplePodcast } from "./podcastApiCallsInterfaces";

export interface DataStateInterface {
    loader: boolean;
    searchPodcast: SimplePodcast[];
    podcastDetail: PagePropsodcastDetail
}

export interface PagePropsodcastDetail {
    name: string;
    author: string | undefined;
    image: string;
    episodeName: string;
    episodeDescription: string | undefined;
    episodeUrl: string | undefined
}
  