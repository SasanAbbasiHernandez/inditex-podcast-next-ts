import { Podcast } from "@/components/podcast/Podcast";

export const metadata = {
  title: 'Podcast',
  description: 'Podcast',
};

interface Props {
  params: { id: string };
}

export default function PodcastPage({ params }: Props) {
  return (
      <Podcast id={params.id} />
  );
}