import Image from 'next/image';
import profileImage from '../../public/images/profile.png';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className='my-8 text-center'>
      <Image
        className='w-40 h-40 mx-auto overflow-hidden rounded-full'
        src={profileImage}
        alt='Profile'
        width={250}
        height={250}
        priority
      />
      <h2 className='mt-4 text-3xl font-bold'>{"Hi I'm Henry"}</h2>
      <h3 className='text-xl font-semibold'>Full-stack Engineer</h3>
      <p>Beyond World</p>
      <Link href='/contact'>
        <button className='px-4 py-1 mt-2 font-bold bg-yellow-500 rounded-xl'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
