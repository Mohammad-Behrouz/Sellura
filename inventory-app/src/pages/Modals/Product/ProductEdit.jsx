// ModalComponent.jsx
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import "../../../styles/App.css"
import alertify from 'alertifyjs'

// تنظیم ریشه اپ برای دسترسی‌پذیری
Modal.setAppElement('#root');

export default function ModalComponent({ isOpen, onClose, submitEdit, id }) {
    const [product, setProduct] = useState({
        name: "",
        code: "",
        measurementUnit: "",
        minimumStock: "",
        weight: "",
        offer: "",
    });

    // گرفتن اطلاعات محصول برای ویرایش
    useEffect(() => {
        if (id !== 0) {
            const fetchProduct = async () => {
                try {
                    const res = await fetch("https://localhost:44348/api/product/" + id);
                    if (!res.ok) throw new Error("Failed to fetch product");
                    const json = await res.json();
                    setProduct(json);
                } catch (err) {
                    alertify.error("خطا در دریافت اطلاعات محصول");
                }
            };
            fetchProduct();
        } else {
            // حالت افزودن: مقدارها ریست بشن
            setProduct({
                name: "",
                code: "",
                measurementUnit: "",
                minimumStock: "",
                weight: "",
                offer: "",
            });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };


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
            <h2>ویرایش کالا</h2>
            <form className='modal-container' onSubmit={submitEdit}>
                <div className="input-wrapper">
                    <i className="fa fa-box"></i>
                    <input
                        type="text"
                        name="name"
                        placeholder="نام کالا"
                        value={product.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-wrapper">
                    <i className="fa fa-qrcode"></i>
                    <input
                        type="text"
                        name="code"
                        placeholder="کد یکتای کالا"
                        value={product.code}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-wrapper">
                    <i className="fa fa-hashtag"></i>
                    <input
                        type="text"
                        name="measurementUnit"
                        placeholder="واحد اندازه‌گیری کالا"
                        value={product.measurementUnit}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-wrapper">
                    <i className="fa fa-compress"></i>
                    <input
                        type="text"
                        name="minimumStock"
                        placeholder="حداقل موجودی"
                        value={product.minimumStock}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-wrapper">
                    <i className="fa fa-weight-hanging"></i>
                    <input
                        type="text"
                        name="weight"
                        placeholder="وزن کالا"
                        value={product.weight}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-wrapper">
                    <i className="fa fa-percent"></i>
                    <input
                        type="text"
                        name="offer"
                        placeholder="درصد تخفیف (درصورت وجود)"
                        value={product.offer}
                        onChange={handleChange}
                    />
                </div>

                <div id="flex-modal-btn">
                    <button type="button" className="dropbtn redbtn" onClick={onClose}>بستن</button>
                    <button type="submit" className="dropbtn greenbtn">{id === 0 ? "افزودن" : "ویرایش"}</button>
                </div>
            </form>

        </Modal>
    );
}
