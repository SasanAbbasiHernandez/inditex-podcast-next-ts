import Image from 'next/image';
import Link from 'next/link';

import '../../styles/components/podcast/podcast-detail.scss';

interface Props {
    author: string | undefined,
    image: string,
    name: string,
    podcastId: string
}

export const PodcastDetail = ({author, image, name, podcastId}: Props) => {
  return (
    <Link className='podcast-detail-wrapper' href={`/podcast/${podcastId}`}>
        <Image
            src={image}
            width={250}
            height={250}
            className='podcast-detail-image'
            alt={`Podcast Logo`}
            priority
        />
        <div className='podcast-detail-line'></div>
        <span className='podcast-detail-name'>{name}</span>
        <span className='podcast-detail-author'>{`by ${author}`}</span>
    </Link>
  )
}
