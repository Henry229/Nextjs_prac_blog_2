import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/posts';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, description, date, path, content } = post;
  return (
    <article>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
    </article>
  );
}
