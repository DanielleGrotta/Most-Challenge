import React from 'react';
import './modal.css';


  const Modal =({id = 'modal',type='', onClose = () => {}, children }) => {
    const props = type;
    const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  }
  
if (props === 'Cadastrar') {
  return (
    <>
     <div className="modal-header"> 
        <h5 className="modal-title" id="exampleModalLabel">Cadastrar Cliente</h5>
        <hr />
      </div>
      <div className="modal-fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="employeeModalLabel" aria-hidden="true" onClick={handleOutsideClick}>
        <div className="modal-dialog">
          <div className="modal-content" >
            <div className="modal-btn">
              <button type="button" className="close" onClick={onClose}>x</button>
            </div>
    
            {children}

          </div>
        </div>
      </div>
    </>
  );
}
};

export default Modal;