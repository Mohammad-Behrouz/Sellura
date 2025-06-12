// ModalComponent.jsx
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import "../../../styles/App.css"
import { tr } from 'framer-motion/client';
// تنظیم ریشه اپ برای دسترسی‌پذیری
Modal.setAppElement('#root');

export default function ModalComponent({ isOpen, onClose , id }) {
    const [product , setProduct] = useState({})
    useEffect(()=>{
        if(id!=0){
            const fetchP = async ()=>{
                const res = await fetch("https://localhost:44348/api/product/" + id)
                const json = await res.json();
    
                setProduct(json);
            }
            fetchP();
        }
    } , [id])
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
            <h2>مشاهده اطلاعات کالا</h2>
            <div className='modal-container'>
                <form className='modal-container' onSubmit={fetch}>

                        <div className="input-wrapper">
                            <i className="fa fa-box"></i>
                            <input type="text" name='Name' placeholder="نام کالا"  value={product.name || ""} readOnly={true}/>
                        </div>

                        <div className="input-wrapper">
                            <i className="fa fa-qrcode"></i>
                            <input type="text" name='Code' placeholder="کد یکتای کالا"  value={product.code || ""} readOnly={true} />
                        </div>


                        <div className="input-wrapper" >
                            <i className="fa fa-hashtag"></i>
                            <input type="text" name='MeasurementUnit' placeholder="واحد اندازه گیری کالا"  value={product.measurementUnit || ""} readOnly={true}/>
                        </div>

                        <div className="input-wrapper" >
                            <i className="fa fa-compress"></i>
                            <input type="text" name='MinimumStuck' placeholder="حداقل موجودی مورد نیاز برای سطح هشدار" readOnly={true}  value={product.minimumStock || ""}/>
                        </div>
                        <div className="input-wrapper" >
                            <i className="fa fa-weight-hanging"></i>
                            <input type="text" name='Weight' placeholder="وزن خالص کالا به کیلوگرم"  value={product.weight || ""} readOnly={true}/>
                        </div>
                        <div className="input-wrapper" >
                            <i className="fa fa-percent"></i>
                            <input type="text" name='Offer' placeholder="درصد تخفیف (درصورت وجود)"  value={product.offer|| ""} readOnly={true} />
                        </div>

                    <div id='flex-modal-btn' style={{}}>
                        <button className='dropbtn redbtn' onClick={onClose}>بستن</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
