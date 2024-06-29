import { currentUser } from '@clerk/nextjs/server';
import SignIn from '@/components/SignIn';

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <SignIn />;
  }

  return (
    <main className='flex flex-col h-screen text-center'>
      <h1 className='text-4xl mt-20'>Welcome, { user.firstName }</h1>
    </main>
  );
}

export default HomePage;
