// ModalComponent.jsx
import React from 'react';
import Modal from 'react-modal';
import "../../styles/App.css"
// تنظیم ریشه اپ برای دسترسی‌پذیری
Modal.setAppElement('#root');

export default function ModalComponent({ isOpen, onClose}) {
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
            <h2>مشاهده اطلاعات انبار</h2>
            <div className='modal-container'>
                <span>نام انبار</span>
                <div className="input-wrapper">
                    <i className="fa fa-warehouse"></i>
                    <input type="text"  placeholder="نام انبار" disabled />
                </div>

                <div className="input-wrapper">
                    <i className="fa fa-location-dot"></i>
                    <input type="text"  placeholder="آدرس کامل انبار" disabled />
                </div>


                <div className="input-wrapper" >
                    <i className="fa fa-box"></i>
                    <input type="text" disabled  placeholder="ظرفیت انبار (برحسب قلم کالا)" />
                </div>

            </div>
            <button className='dropbtn redbtn' onClick={onClose}>بستن</button>
        </Modal>
    );
}
