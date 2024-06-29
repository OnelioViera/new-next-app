import { currentUser } from '@clerk/nextjs/server';
import SignIn from '@/components/SignIn';
import Dashboard from '@/components/Dashboard';

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <SignIn />;
  }

  return (
    <>
    <div className='h-screen justify-center text-center lg:text-center lg:justify-between md:text-center md:justify-between px-14 py-6 bg-gray-100'>
      <h1 className='text-xl lg:text-2xl md:text-xl'>Dashboard</h1>
        <p className='lg:text-md md:text-sm max-sm:hidden lg-block'>You are signed in as: <span className='font-bold'>{user.fullName}</span></p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-between text-center mt-8'>
          <Dashboard />
          <Dashboard />
          <Dashboard />
          </div>
      </div>
      

      </>
  );
}

export default HomePage;
