import { SignInButton } from "@clerk/nextjs";
import React from "react";
import SignInCard from "./SignInCard";

const SignIn = () => {
  return (
    <section className="bg-center bg-cover bg-no-repeat bg-fixed bg-opacity-50 relative"
      style={{ backgroundImage: "url('https://www.musictruth.com/wp-content/uploads/2017/05/Screen-Shot-2017-05-11-at-9.55.01-AM.jpg')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        <div className="text-center object-center mt-10 lg:pt-12">
          <h1 className="font-extrabold text-4xl lg:text-6xl text-white">Welcome</h1>
          <p className="font-mono text-white my-4 lg:text-lg">Please sign in to your Dashboard</p>
          <div className='text-white bg-blue-700 hover:bg-blue-900 hover:text-white rounded-md px-4 py-2'>
            <SignInButton />
          </div>
          <div className="" style={{ backgroundImage: "url('https://www.cyfe.com/wp-content/uploads/2018/03/TobiesCYFE-1024x546.jpg')" }}>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 text-center justify-center gap-4 my-16'>
          <SignInCard />
          <SignInCard />
        </div>
        <div className="grid grid-cols-6 gap-6 pb-10">
          <div className="col-span-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis atque error fugit quos perferendis mollitia, hic aperiam quam facilis tenetur harum cum modi enim, animi quidem assumenda corporis? Porro, at.
            <br />
            <br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam ullam a, numquam magnam, quibusdam earum optio similique mollitia nisi aliquid quas dignissimos consequuntur minus necessitatibus, nemo expedita voluptatibus ad.</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam ullam a, numquam magnam, quibusdam earum optio similique mollitia nisi aliquid quas dignissimos consequuntur minus necessitatibus, nemo expedita voluptatibus ad.</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam ullam a, numquam magnam, quibusdam earum optio similique mollitia nisi aliquid quas dignissimos consequuntur minus necessitatibus, nemo expedita voluptatibus ad.</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam ullam a, numquam magnam, quibusdam earum optio similique mollitia nisi aliquid quas dignissimos consequuntur minus necessitatibus, nemo expedita voluptatibus ad.</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam ullam a, numquam magnam, quibusdam earum optio similique mollitia nisi aliquid quas dignissimos consequuntur minus necessitatibus, nemo expedita voluptatibus ad.</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam ullam a, numquam magnam, quibusdam earum optio similique mollitia nisi aliquid quas dignissimos consequuntur minus necessitatibus, nemo expedita voluptatibus ad.</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam ullam a, numquam magnam, quibusdam earum optio similique mollitia nisi aliquid quas dignissimos consequuntur minus necessitatibus, nemo expedita voluptatibus ad.</p>
          </div>
          <div className="text-white text-center">
            <ul>
              <li className="bg-blue-700 hover:bg-blue-900 my-2 rounded-lg">Home</li>
              <li className="bg-blue-700 hover:bg-blue-900 my-2 rounded-lg">About</li>
              <li className="bg-blue-700 hover:bg-blue-900 my-2 rounded-lg">Services</li>
              <li className="bg-blue-700 hover:bg-blue-900 my-2 rounded-lg">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  );
}

export default SignIn;  