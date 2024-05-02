import { Episode } from '../../../../../components/episode/Episode';

export const metadata = {
  title: 'Episode',
  description: 'Episode',
};

interface Props {
  params: { id: string, episodeId: string};
}

export default function PodcastPage({ params }: Props) {
  return (
      <Episode params={params} />
  );
}