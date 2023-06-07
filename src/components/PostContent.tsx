import { Post, PostData } from '@/service/posts';
import { AiTwotoneCalendar } from 'react-icons/ai';

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, path, content } = post;
  return (
    <section>
      <div>
        <AiTwotoneCalendar />
        <p>{date.toString()}</p>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
