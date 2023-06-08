import CarousePosts from '@/components/CarousePosts';
import FeaturedPosts from '@/components/FeaturedPosts';
import Profile from '@/components/Profile';
import Image from 'next/image';

export default function Home() {
  return (
    <section className='m-4'>
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Async Server Component */}
      <CarousePosts />
    </section>
  );
}
