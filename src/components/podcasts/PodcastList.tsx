import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useData } from '@/hooks/useData';

import '../../styles/components/podcasts/podcast-list.scss';

export const PodcastList = () => {

  const {
    searchPodcast
  } = useData();

  const [searchTerm, setSearchTerm] = useState('');

  const filteredPodcasts = searchPodcast.filter(podcast =>
    podcast.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    podcast.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };
  
  return (
    <div className='podcast-wrapper'>
      <div className='podcast-search'>
        <span>{filteredPodcasts.length}</span>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Filter podcasts..."
        />
      </div>
      <div className='podcast-list'>
        {
          filteredPodcasts.length > 0 && filteredPodcasts.map( podcast => (
            <Link href={`/podcast/${podcast.id}`} key={podcast.id}>
              <div className='podcast-item'>
                <Image
                  src={podcast.image}
                  width={150}
                  height={150}
                  className='podcast-item-image'
                  alt={`Podcast Logo`}
                  priority
                />
                <span className='podcast-item-name'>{podcast.name}</span>
                <span className='podcast-item-author'>{`Author: ${podcast.author}`}</span>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}