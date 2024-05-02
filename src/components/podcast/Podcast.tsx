'use client';

import React, { useEffect, useState } from 'react';

import { PodcastDetail } from './PodcastDetail';
import { PodcastEpisodeList } from './PodcastEpisodeList';

import { getPodcast } from '@/api/PodcastAPICalls';

import { useData } from '@/hooks/useData';

import { SimplePodcastDetail } from '@/interfaces/podcastApiCallsInterfaces';

import "../../styles/components/podcast/podcast.scss";

interface Props {
    id: string
}

export const Podcast = ({id}: Props) => {

    const [podcastDetails, setPodcastDetails] = useState<SimplePodcastDetail>();

    const {
        finishLoading,
        beginLoading
      } = useData();
      
    useEffect(() => {
        getAllPodcasts();
    }, []);
    
    const getAllPodcasts = async () => {
        await beginLoading();
        const podcast: SimplePodcastDetail = await getPodcast(id);
        setPodcastDetails(podcast);
        await finishLoading();
    };
    
  return (
    <div>
        {
            podcastDetails && (
                <div className='podcast-page-wrapper'>
                    <PodcastDetail
                        author={podcastDetails.author}
                        image={podcastDetails.image}
                        name={podcastDetails.name}
                        podcastId={id}
                    />
                    <PodcastEpisodeList 
                        episodes={podcastDetails.episodes}
                        author={podcastDetails.author}
                        image={podcastDetails.image}
                        name={podcastDetails.name}
                        id={id}
                    />
                </div>
            )
        }
    </div>
  )
}