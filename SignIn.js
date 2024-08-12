import React from 'react';
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { authContext } from './authcontext';

function SignIn() {
  const { googleLoginHandler } = useContext(authContext);

  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-white">
      <div className="flex justify-center items-center gap-10 flex-col">
        <div className="text-center text-4xl gap-2 font-bold mt-4">Welcome! </div>
        <div className="flex flex-col  items-center mt-10">
          <img 
            src="https://static.wixstatic.com/media/474e97_3adcffeaf219479a9cc4774e57c1838c~mv2.png/v1/fill/w_353,h_318,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/manual-img_bc9570e4.png"
            className="w-20 h-20 mt-4"
            alt="Pantry Tracker Logo"
          />
          <div className='mt-4 flex justify-center items-center'>
          <button 
            onClick={googleLoginHandler} 
            className="flex items-center justify-center gap-2 w-fit h-12 px-4 rounded-2xl text-white bg-violet-600"
          >
            <FcGoogle className="text-4xl bg-black rounded-full mr-4" />
            Sign in with Google
          </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
