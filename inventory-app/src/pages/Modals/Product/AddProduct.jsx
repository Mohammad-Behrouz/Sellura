// ModalComponent.jsx
import React from 'react';
import Modal from 'react-modal';
import "../../../styles/App.css"
import alertify from 'alertifyjs'

// تنظیم ریشه اپ برای دسترسی‌پذیری
Modal.setAppElement('#root');

export default function ModalComponent({ isOpen, onClose , fetch}) {
  

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
            <h2>افزودن کالا</h2>
            <form className='modal-container' onSubmit={fetch}>

                <div className="input-wrapper">
                    <i className="fa fa-box"></i>
                    <input type="text" name='Name' placeholder="نام کالا" />
                </div>

                <div className="input-wrapper">
                    <i className="fa fa-qrcode"></i>
                    <input type="text" name='Code' placeholder="کد یکتای کالا" />
                </div>


                <div className="input-wrapper" >
                    <i className="fa fa-hashtag"></i>
                    <input type="text" name='MeasurementUnit' placeholder="واحد اندازه گیری کالا" />
                </div>

                <div className="input-wrapper" >
                    <i className="fa fa-compress"></i>
                    <input type="text" name='MinimumStuck' placeholder="حداقل موجودی مورد نیاز برای سطح هشدار" />
                </div>
                <div className="input-wrapper" >
                    <i className="fa fa-weight-hanging"></i>
                    <input type="text" name='Weight' placeholder="وزن خالص کالا به کیلوگرم" />
                </div>
                <div className="input-wrapper" >
                    <i className="fa fa-percent"></i>
                    <input type="text" name='Offer' placeholder="درصد تخفیف (درصورت وجود)" />
                </div>

                <div id='flex-modal-btn' style={{}}>
                    <button className='dropbtn redbtn' onClick={onClose}>بستن</button>
                    <button type='submit' className='dropbtn greenbtn' >افزودن</button>
                </div>
            </form>
        </Modal>
    );
}
