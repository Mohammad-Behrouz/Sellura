// ModalComponent.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import * as iranCity from 'iran-city';
import "../../../styles/App.css";

// تنظیم ریشه اپ برای دسترسی‌پذیری
Modal.setAppElement('#root');

export default function ModalComponent({ isOpen, onClose, fetchData, id }) {
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedProv, setSelectedProv] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const [wareHouse, setWareHouse] = useState({
        name: '',
        phone: '',
        address: '',
        manager: '',
        capacity: '',
        situation: '',
        city: ''
    });

    useEffect(() => {
        if (id !== 0) {
            const fetchP = async () => {
                const res = await fetch("https://localhost:44348/api/WareHouse/" + id);
                const json = await res.json();
                setWareHouse(json);
                setSelectedCity(json.city);
            };
            fetchP();
        } else {
            setWareHouse({
                name: '',
                phone: '',
                address: '',
                manager: '',
                capacity: '',
                situation: '',
                city: ''
            });
            setSelectedCity('');
        }
    }, [id]);

    useEffect(() => {
        setProvinces(iranCity.allProvinces());
    }, []);

    const onProvChange = (e) => {
        const id = parseInt(e.target.value);
        setSelectedProv(id);
        const citiesList = iranCity.citiesOfProvince(id);
        setCities(citiesList);
        setWareHouse(prev => ({ ...prev, city: citiesList[0]?.name || '' }));
    };

    const onCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);
        setWareHouse(prev => ({ ...prev, city }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWareHouse(prev => ({ ...prev, [name]: value }));
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
            <h2>{id === 0 ? "افزودن انبار" : "ویرایش انبار"}</h2>
            <form onSubmit={fetchData} className='modal-container'>

                <div className="input-wrapper">
                    <i className="fa fa-warehouse"></i>
                    <input
                        type="text"
                        placeholder="نام انبار"
                        name='name'
                        value={wareHouse.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-wrapper">
                    <i className="fa fa-phone"></i>
                    <input
                        type="text"
                        placeholder="شماره تلفن انبار"
                        name='Phone'
                        value={wareHouse.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-wrapper">
                    <i className="fa fa-location-dot"></i>
                    <input
                        type="text"
                        placeholder="آدرس کامل انبار"
                        name='address'
                        value={wareHouse.address}
                        onChange={handleChange}
                    />
                </div>

                <div style={{ display: "flex", width: "65%", gap: "10px" }}>
                    <select name="situation" className='dropdown'>
                        <option value="فعال">فعال</option>
                        <option value="غیر فعال">غیر فعال</option>
                    </select>

                    <div className="input-wrapper">
                        <i className="fa fa-weight"></i>
                        <input
                            type="text"
                            placeholder="ظرفیت انبار"
                            name='capacity'
                            value={wareHouse.capacity}
                            onChange={handleChange}
                        />
                    </div>
                    
                </div>

                <div className="input-wrapper">
                    <i className="fa fa-user-tie"></i>
                    <input
                        type="text"
                        placeholder="مدیر انبار (اختیاری)"
                        name='manager'
                        value={wareHouse.manager}
                        onChange={handleChange}
                    />
                </div>



                <div style={{ display: "flex", width: "65%", gap: "10px" }}>
                    <select value={selectedCity} className="dropdown" onChange={e => setSelectedCity(e.target.value)} name='City' disabled={!cities.length}>
                        <option value="">شهر را انتخاب کنید</option>
                        {cities.map(c => (
                            <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                    </select>
                    <select onChange={onProvChange} className="dropdown"  value={selectedProv}>
                        <option value="">استان را انتخاب کنید</option>
                        {provinces.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>

                </div>

                <div id='flex-modal-btn'>
                    <button type="button" className='dropbtn redbtn' onClick={onClose}>بستن</button>
                    <button type="submit" className='dropbtn greenbtn'>{id === 0 ? "افزودن" : "ذخیره تغییرات"}</button>
                </div>
            </form>
        </Modal>
    );
}
