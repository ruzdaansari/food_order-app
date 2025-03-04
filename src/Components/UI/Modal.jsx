import { useEffect ,useRef} from "react";
import { createPortal } from "react-dom";

export default function Modal({ children , open, onClose ,className='' }) {

    const dialogModal = useRef() 
    useEffect(()=>{

        const modal = dialogModal.current;
        if(open){
            modal.showModal();
        } 

        return ()=> modal.close();
    },[open])
  return createPortal(
    <dialog ref={dialogModal} className={`modal ${className}`} onClose={onClose}>{children}</dialog>,
    document.getElementById("modal")
  );
}
