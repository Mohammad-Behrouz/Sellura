// ModalComponent.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import "../../../styles/App.css";
import * as iranCity from 'iran-city';


// تنظیم ریشه اپ برای دسترسی‌پذیری
Modal.setAppElement('#root');

export default function ModalComponent({ isOpen, onClose, fetch }) {

    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedProv, setSelectedProv] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        setProvinces(iranCity.allProvinces());
    }, []);

    const onProvChange = (e) => {
        const id = parseInt(e.target.value);
        setSelectedProv(id);
        setCities(iranCity.citiesOfProvince(id));
        setSelectedCity('');
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
            <h2>افزودن انبار</h2>
            <form onSubmit={fetch} className='modal-container'>

                <div className="input-wrapper">
                    <i className="fa fa-warehouse"></i>
                    <input type="text" placeholder="نام انبار" name='name' />
                </div>

                <div className="input-wrapper" >
                    <i className="fa fa-phone"></i>
                    <input type="text" placeholder="شماره تلفن انبار" name='Phone' />
                </div>

                <div className="input-wrapper">
                    <i className="fa fa-location-dot"></i>
                    <input type="text" placeholder="آدرس کامل انبار" name='address' />
                </div>
                <div style={{ display: "flex", width: "65%", gap: "10px" }}>

                    <div className="input-wrapper" >
                        <i className="fa fa-user-tie"></i>
                        <input type="text" placeholder="مدیر انبار (اختیاری)" name='Manager' />
                    </div>


                    <div className="input-wrapper">
                        <i className="fa fa-weight"></i>
                        <input type="text" placeholder="ظرفیت انبار" name='capacity' />
                    </div>

                </div>
                <div style={{ display: "flex", width: "65%", gap: "10px" }}>
                    <select value={selectedCity} className="dropdown" onChange={e => setSelectedCity(e.target.value)} name='City' disabled={!cities.length}>
                        <option value="">شهر را انتخاب کنید</option>
                        {cities.map(c => (
                            <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                    </select>
                    <select onChange={onProvChange} className="dropdown" value={selectedProv}>
                        <option value="">استان را انتخاب کنید</option>
                        {provinces.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>

                </div>

                <input type='hidden' value="فعال" name='situation'/>

                <div id='flex-modal-btn' style={{}}>
                    <button className='dropbtn redbtn' onClick={onClose}>بستن</button>
                    <button className='dropbtn greenbtn' type='submit'>افزودن</button>
                </div>
            </form>
        </Modal>
    );
}
