// ModalComponent.jsx
import React from 'react';
import Modal from 'react-modal';
import "../../styles/App.css"
// تنظیم ریشه اپ برای دسترسی‌پذیری
Modal.setAppElement('#root');

export default function ModalComponent({ isOpen, onClose, fetch }) {
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
            <h2>ویرایش انبار</h2>
            <div className='modal-container'>

                <div className="input-wrapper">
                    <i className="fa fa-warehouse"></i>
                    <input type="text" required placeholder="نام انبار" />
                </div>

                <div className="input-wrapper">
                    <i className="fa fa-location-dot"></i>
                    <input type="text" required placeholder="آدرس کامل انبار" />
                </div>


                <div className="input-wrapper" >
                    <i className="fa fa-box"></i>
                    <input type="text" required placeholder="ظرفیت انبار (برحسب قلم کالا)" />
                </div>

            </div>
            <div id='flex-modal-btn' style={{}}>
                <button className='dropbtn redbtn' onClick={onClose}>بستن</button>
                <button className='dropbtn greenbtn' onClick={fetch}>ویرایش</button>
            </div>
        </Modal>
    );
}
