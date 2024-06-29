import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


const Header = async () => {

  return (
    <nav className="sticky top-0 z-50  bg-fixed text-center max-w-full bg-black text-white px-12 lg:px-40 md:px-20 py-4 border-b-2 border-b-blue-500">
      <div className="flex text-center justify-between">
        <h2 className='text-2xl text-centerjustify-center'>Next.js App</h2>
          <div className=''>
          <SignedOut>
            <div className='hover:font-semibold'>
              <SignInButton />
              </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
          </div>
        </div>
    </nav>
  );
};

export default Header;