'use client';

import React, { useEffect } from 'react';

import { PodcastList } from './PodcastList';
import { getPodcasts } from '@/api/PodcastAPICalls';
import { useData } from '@/hooks/useData';

import { SimplePodcast } from '../../interfaces/podcastApiCallsInterfaces';

export const Podcasts = () => {

    const {
        addSearchPodcast,
        finishLoading,
        beginLoading
      } = useData();
      
    useEffect(() => {
        getAllPodcasts();
    }, []);
    
    const getAllPodcasts = async () => {
        await beginLoading();
        const podcasts: SimplePodcast[] = await getPodcasts(100);
        await addSearchPodcast(podcasts);
        await finishLoading();
    };
    
    return (
        <PodcastList/>
    )
}
