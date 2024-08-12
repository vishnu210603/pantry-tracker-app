// import { ImStatsBars } from "react-icons/im";
// import { useContext } from "react";
// import {authContext} from "@/authcontext";

// export default function Nav(){
//   const { user,loading,  logout } = useContext(authContext);
//     return(
//         <header className=" ">
//       <div className="flex justify-between bg-violet-500 h-[70px]  p-2 mx-auto ">
//         {user && !loading && (
//           <div className="flex items-center p-2 gap-2">
//           <img src="https://static.vecteezy.com/system/resources/previews/042/636/371/original/poised-profile-badge-design-for-graceful-male-face-illustration-bold-gaze-crest-confident-male-face-icon-for-striking-presence-vector.jpg" className="h-16 w-16 border-black border-2 rounded-full"/>
//           <username className="text-lg font-semibold">Hi! Vishnu Yadav</username>
//         </div>
//         )}
      
//       <div className="text-4xl text-center flex items-center justify-center font-semibold">Pantry Tracker</div>
//       <div className="flex items-center  gap-2 p-2">
        
//         <stats className=""><ImStatsBars className="text-3xl" /></stats>
//         <button className="w-20 h-10 rounded-3xl bg-black">Logout</button>
//       </div>
//       </div>
//     </header>
//     )
// }

// import { ImStatsBars } from "react-icons/im";
// import { useContext } from "react";
// import { authContext } from "@/authcontext";

// export default function Nav() {
//   const { user, loading, logout } = useContext(authContext);

//   return (
//     <header>
//       <div className="flex justify-between bg-violet-500 h-[70px] p-2 mx-auto">
//         {user && !loading && (
//           <div className="flex items-center p-2 gap-2">
//             <img
//               src="https://static.vecteezy.com/system/resources/previews/042/636/371/original/poised-profile-badge-design-for-graceful-male-face-illustration-bold-gaze-crest-confident-male-face-icon-for-striking-presence-vector.jpg"
//               className="h-16 w-16 border-black border-2 rounded-full"
//             />
//             <span className="text-lg font-semibold">Hi! Vishnu Yadav</span>
//           </div>
//         )}

//         <div className="text-4xl text-center flex items-center justify-center font-semibold">
//           Pantry Tracker
//         </div>
//         <div className="flex items-center gap-2 p-2">
//           <ImStatsBars className="text-3xl" />
//           <button onClick={logout} className="w-20 h-10 rounded-3xl bg-black text-white">
//             Logout
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";
// import { ImStatsBars } from "react-icons/im";
// import { useContext } from "react";
// import { authContext } from "@/authcontext";  // Make sure the path is correct

// export default function Nav() {
//   const { user, loading, logout } = useContext(authContext);

//   return (
//     <header>
//       <div className="flex justify-between bg-violet-500 h-[70px] p-2 mx-auto">
//         {user && !loading && (
//           <div className="flex items-center p-2 gap-2">
//             <img
//               src={user.photoURL}
//               alt={user.displayName}
//               referrerPolicy="no-referrer"
//               className="h-16 w-16 border-black border-2 rounded-full"
//             />
//             <span className="text-lg font-semibold">Hi! {user.displayName}</span>
//           </div>
//         )}

//         <div className="text-4xl text-center flex items-center justify-center font-semibold">
//           Pantry Tracker
//         </div>
//         <div className="flex items-center gap-2 p-2">
//           <ImStatsBars className="text-3xl" />
//           <button onClick={logout} className="w-20 h-10 rounded-3xl bg-black text-white">
//             Logout
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }



// "use client";
// import { ImStatsBars } from "react-icons/im";
// import { useContext } from "react";
// import { authContext } from "@/authcontext";

// export default function Nav() {
//   const { user, loading, logout } = useContext(authContext);

//   if (loading || !user) {
//     // Don't render the Nav if still loading or if user is not logged in
//     return null;
//   }

//   return (
//     <header>
//       <div className="flex justify-between bg-violet-500 h-[70px] p-2 mx-auto">
//         <div className="flex items-center p-2 gap-2">
//           <img
//             src={user.photoURL}
//             alt={user.displayName}
//             referrerPolicy="no-referrer"
//             className="h-16 w-16 border-black border-2 rounded-full"
//           />
//           <span className="text-lg font-semibold">Hi! {user.displayName}</span>
//         </div>

//         <div className="text-4xl text-center flex items-center justify-center font-semibold">
//           Pantry Tracker
//         </div>
//         <div className="flex items-center gap-2 p-2">
//           <ImStatsBars className="text-3xl" />
//           <button onClick={logout} className="w-20 h-10 rounded-3xl bg-black text-white">
//             Logout
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";
import { ImStatsBars } from "react-icons/im";
import { useContext } from "react";
import { authContext } from "@/authcontext";

export default function Nav() {
  const { user, loading, logout } = useContext(authContext);

  if (loading || !user) {
    // Don't render the Nav if still loading or if the user is not logged in
    return null;
  }

  return (
    <header>
      <div className="flex justify-between items-center bg-violet-500 h-[70px] p-2 mx-auto max-w-full :max-w-7xl">
        <div className="flex items-center p-2 gap-2">
          <img
            src={user.photoURL}
            alt={user.displayName}
            referrerPolicy="no-referrer"
            className="h-12 w-12 md:h-16 md:w-16 border-black border-2 rounded-full"
          />
          <span className="text-sm md:text-lg font-semibold">Hi! {user.displayName}</span>
        </div>

        <div className="text-2xl md:text-4xl text-center flex items-center justify-center font-semibold">
          Pantry Tracker
        </div>
        
        <div className="flex items-center gap-2 p-2">
          <ImStatsBars className="text-2xl md:text-3xl" />
          <button onClick={logout} className="w-16 h-8 md:w-20 md:h-10 rounded-3xl bg-black text-white">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
