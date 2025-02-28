// import React, { forwardRef, useImperativeHandle, useRef } from 'react'
// import { createPortal } from 'react-dom';

// const Modal = forwardRef(function Modal({children},ref){
//     const dialog = useRef();
//     useImperativeHandle(ref, () => {
//         return{
//             open(){
//                 dialog.current.showModal();
//             },
//             close(){
//                 dialog.current.close();
//             }
//         }
//     })
//   return createPortal(
//     <dialog className='backdrop:bg-stone-900/90 bg-transparent' ref={dialog}>
//         {children}
//     </dialog>,
//document.getElementById('modal')
//   )
// })

// export default Modal





import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';

function Modal({open, children, onClose},ref){
    const dialog = useRef();

    useEffect(() => {
        if(open){
            dialog.current.showModal();
        }else{
            dialog.current.close();
        }
    },[open])
    
  return createPortal(
    <dialog className='backdrop:bg-stone-900/90 bg-transparent' ref={dialog} onClose={onClose}>
        {open ? children : null}
    </dialog>,
  document.getElementById("modal")
  )
}

export default Modal