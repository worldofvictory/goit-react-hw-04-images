import { useEffect} from 'react';
import css from "./Modal.module.css"

import React from 'react'

function Modal({ closeModal, url }) {
  useEffect(() => {
 const handleKeyDown = e => {
    if (e.code === 'Escape') {
     closeModal();
    }
    };
    window.addEventListener('keydown', handleKeyDown);
     return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
  }, [closeModal]);
  
 const handleClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className ={css.modal} onClick={handleClick}>
        <img src={url} alt="modal_img" />
      </div>
  )
}

export default Modal;


  

 

  

