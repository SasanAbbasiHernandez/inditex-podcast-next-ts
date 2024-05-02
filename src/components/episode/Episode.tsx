'use client';

import { PodcastDetail } from '../podcast/PodcastDetail';
import AudioPlayer from './AudioPlayer';

import { useData } from '@/hooks/useData';

import '../../styles/components/episode/episode.scss';

interface Props {
    params: { id: string, episodeId: string};
  }

export const Episode = ({params} :Props) => {

  const {
      podcastDetail
    } = useData();
      
  return (
    <div className='episode-page-wrapper'>
        <PodcastDetail
            author={podcastDetail.author}
            image={podcastDetail.image}
            name={podcastDetail.name}
            podcastId={params.id}
        />
        <div className='episode-detail-wrapper'>
            <span className='episode-detail-name'>{podcastDetail.episodeName}</span>
            <span className='episode-detail-description'>{podcastDetail.episodeDescription}</span>
            <AudioPlayer audioSrc={podcastDetail.episodeUrl} />
        </div>
    </div>
  )
}
