import { currentUser } from '@clerk/nextjs/server';
import SignIn from '@/components/SignIn';

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <SignIn />;
  }

  return (
    <main className='flex flex-col h-screen text-center bg-gray-100'>
      <h1 className='text-2xl lg:text-4xl mt-20 mb-4'>Welcome to your Dashboard</h1>
      <div className='container mx-auto'>
        <p className='lg:text-lg my-4'>You are signed in as: <span className='font-bold'>{user.fullName}</span></p>
      </div>
    </main>
  );
}

export default HomePage;
