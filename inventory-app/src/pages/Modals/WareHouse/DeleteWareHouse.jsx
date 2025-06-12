// ModalComponent.jsx
import React from 'react';
import Modal from 'react-modal';
import "../../../styles/App.css"
import alertify from 'alertifyjs'

// تنظیم ریشه اپ برای دسترسی‌پذیری
Modal.setAppElement('#root');

export default function ModalComponent({ isOpen, onClose, id , deleteProduct}) {
   
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="مثال مودال"
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '2rem',
                    width: "40%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px purple"
                },
            }}
        >
            <img style={{ width: "80%" }} src="/Images/dashboard/delete.png" alt="" />
            <h5 style={{ margin: "20px" }}>آیا مطمئنی که میخوای حذف کنی ؟</h5>
            <div id='flex-modal-btn' style={{}}>
                <button className='dropbtn redbtn' onClick={onClose}>نه</button>
                <button className='dropbtn greenbtn' onClick={() => deleteProduct(id)} >آره</button>
            </div>
        </Modal>
    );
}
