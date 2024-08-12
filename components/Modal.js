
// function Modal({show, onClose, children}){
   
// return(
  
// <div 
//     style={{transform: show ? "translateX(0%)" : "translateX(-200%)",}}
//     className="absolute top-20  left-2 w-full h-full z-10 transition-all duration-500">
//       <div className="container flex flex-wrap gap-4 p-4 mx-auto max-w-2xl h-[80vh] rounded-2xl bg-slate-400">
//         <div className="flex h-fit gap-2 items-center">
//         <div className="">
//         <button onClick={()=>{
//           onClose(false);
//         }} className="h-8 w-8 rounded-full bg-slate-500"> X </button>
//         {children}
//         </div>
        
//         </div>
//       </div>
//     </div>
// )
// }


// export default Modal;





function Modal({show, onClose, children}){
   
  return(
    
  <div 
      style={{transform: show ? "translateX(0%)" : "translateX(-200%)",}}
      className="absolute top-20  left-2 w-full h-full z-10 transition-all duration-500">
        <div className="container flex flex-wrap gap-4 p-4 mx-auto max-w-2xl h-[80vh] rounded-2xl bg-slate-400">
          <div className="flex h-fit gap-2 items-center">
          <div className="">
          <button onClick={()=>{
            onClose(false);
          }} className="h-8 w-8 rounded-full bg-slate-500"> X </button>
          {children}
          </div>
          
          </div>
        </div>
      </div>
  )
  }
  
  
  export default Modal;