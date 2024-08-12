// // import React, { useContext } from 'react';
// // import { FcGoogle } from 'react-icons/fc';
// // import { authContext } from './authcontext';

// // function SignIn() {
// //   const { googleLoginHandler } = useContext(authContext);

// //   return (
// //     <main className='flex flex-col min-h-screen justify-center items-center bg-pantry-bg'>
// //       <div className='flex flex-col items-center gap-10'>
// //         <div className="text-center text-4xl font-medium bg-white p-4 rounded-lg">
// //           Welcome to the Pantry-Tracker!
// //         </div>
// //         <div className='w-52 h-40 flex flex-col items-center justify-center'>
// //           <img 
// //             src="https://rowwad.qa/wp-content/uploads/2023/06/Artboard-2-copy-33.png"
// //             className='w-20 h-20'
// //             alt="Logo"
// //           />
// //           <button 
// //             onClick={googleLoginHandler} 
// //             className='btn flex items-center justify-center gap-2 w-fit h-12 rounded-2xl text-white bg-violet-500 mt-4'
// //           >
// //             <FcGoogle className='text-2xl' />
// //             Sign in with Google
// //           </button>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// // export default SignIn;



// import React from 'react';
// import { useContext } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { authContext } from './authcontext';

// function SignIn() {
//   const { googleLoginHandler } = useContext(authContext);

//   return (
//     <main className="flex flex-col min-h-screen justify-center items-center bg-white">
//       <div className="flex justify-center items-center gap-10 flex-col">
//         <div className="text-center text-4xl font-medium">Welcome to the Pantry-Tracker!</div>
//         <div className="flex flex-col items-center">
//           <img 
//             src="https://rowwad.qa/wp-content/uploads/2023/06/Artboard-2-copy-33.png"
//             className="w-20 h-20 mb-4"
//             alt="Pantry Tracker Logo"
//           />
//           <button 
//             onClick={googleLoginHandler} 
//             className="flex items-center justify-center gap-2 w-fit h-12 px-4 rounded-2xl text-white bg-violet-500"
//           >
//             <FcGoogle className="text-2xl mr-2" />
//             Sign in with Google
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default SignIn;



import React from 'react';
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { authContext } from './authcontext';

function SignIn() {
  const { googleLoginHandler } = useContext(authContext);

  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-white">
      <div className="flex justify-center items-center gap-10 flex-col">
        <div className="text-center text-4xl font-bold">Welcome to the Pantry-Tracker!</div>
        <div className="flex flex-col items-center">
          <img 
            src="https://rowwad.qa/wp-content/uploads/2023/06/Artboard-2-copy-33.png"
            className="w-20 h-20 mb-4"
            alt="Pantry Tracker Logo"
          />
          <button 
            onClick={googleLoginHandler} 
            className="flex items-center justify-center gap-2 w-fit h-12 px-4 rounded-2xl text-white bg-violet-500"
          >
            <FcGoogle className="text-2xl mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
