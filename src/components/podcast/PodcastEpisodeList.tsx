import Link from 'next/link';

import { Result } from '@/interfaces/podcastApiCallsInterfaces';

import { useData } from '@/hooks/useData';

import "../../styles/components/podcast/podcast-episode-list.scss";

interface Props {
    episodes: Result[],
    author: string | undefined,
    image: string,
    name: string,
    id: string
}

export const PodcastEpisodeList = ({episodes, author, image, name, id}: Props) => {

  const {
    addPodcastDetail
  } = useData();
  
  const formatDate = (dateString: string): string => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
  }

  const formatMinutesSeconds = (milliseconds: number): string => {
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      return formattedTime;
  }

  const handlePutEpisode = async (episodeName: string, episodeDescription: string | undefined, episodeUrl: string | undefined) => {
      addPodcastDetail({
        name: name,
        author: author,
        image: image,
        episodeName: episodeName,
        episodeDescription: episodeDescription,
        episodeUrl: episodeUrl
      });
  }

  return (
    <div className='podcast-episode-list-wrapper'>
      <div className='podcast-episodes-count-wrapper'>
        <span>{`Episodes: ${episodes.length}`}</span>
      </div>

      <div className='podcast-episode-list'>
        <div className='podcast-episode-header-list'>
          <span className='podcast-episode-header-title'>Title</span>
          <span className='podcast-episode-header-date'>Date</span>
          <span className='podcast-episode-header-duration'>Duration</span>
        </div>
        <div className='podcast-episode-list-items'>
          {
            episodes && episodes.map( episode => (
                <div className='podcast-episode-list-item' key={episode.trackName}>
                  <Link href={`/podcast/${id}/episode/${episode.trackId}`} className='podcast-episode-list-item-name'>
                    <p onClick={() => handlePutEpisode(episode.trackName, episode.description, episode.episodeUrl)}>{episode.trackName}</p>
                  </Link>
                  <span className='podcast-episode-list-item-date'>{formatDate(episode.releaseDate.toString())}</span>
                  <span className='podcast-episode-list-item-duration'>{formatMinutesSeconds(episode.trackTimeMillis)}</span>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}