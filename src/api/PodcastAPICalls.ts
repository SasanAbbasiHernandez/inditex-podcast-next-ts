import { PodcastInfoResponse, PodcastsInfoResponse, SimplePodcast, SimplePodcastDetail } from "@/interfaces/podcastApiCallsInterfaces";

export const getPodcasts = async (
  limit: number = 100,
): Promise<SimplePodcast[]> => {
  const res: PodcastsInfoResponse = await fetch(
    `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`,{
      next: {
        revalidate: 24 * 60 * 60
      }
    }
  ).then((res) => res.json());

  const podcast: SimplePodcast[] = res.feed.entry.map((podcast) => ({
    id: podcast.id.attributes["im:id"],
    name: podcast["im:name"].label,
    image: podcast["im:image"][2].label,
    author: podcast["im:artist"].label
  }));

  return podcast;
};

export const getPodcast = async (
  id: string, 
  limit: number = 20,
): Promise<SimplePodcastDetail> => {
  const res: PodcastInfoResponse = await fetch(
    `https://itunes.apple.com/lookup?id=${id}&media=podcast
    &entity=podcastEpisode&limit=${limit}`
  ).then((res) => res.json());

  const podcastInfo: SimplePodcastDetail = {
    name: res.results[0].collectionName,
    image: res.results[0].artworkUrl600,
    author: res.results[0].artistName,
    episodes: res.results.slice(-20),
  };

  return podcastInfo;
};