// ModalComponent.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import "../../../styles/App.css"
import * as iranCity from 'iran-city';

// تنظیم ریشه اپ برای دسترسی‌پذیری
Modal.setAppElement('#root');

export default function ModalComponent({ isOpen, onClose,id }) {
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedProv, setSelectedProv] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const[wareHouse , setWareHouse] = useState({})

    useEffect(() => {
        if (id != 0) {
            const fetchP = async () => {
                const res = await fetch("https://localhost:44348/api/WareHouse/" + id)
                const json = await res.json();

                setWareHouse(json);
            }
            fetchP();
        }
    }, [id])

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
            <h2>مشاهده اطلاعات انبار</h2>
            <form onSubmit={fetch} className='modal-container'>

                <div className="input-wrapper">
                    <i className="fa fa-warehouse"></i>
                    <input type="text" placeholder="نام انبار" name='name' value={wareHouse.name} />
                </div>

                <div className="input-wrapper" >
                    <i className="fa fa-phone"></i>
                    <input type="text" placeholder="شماره تلفن انبار" name='Phone' value={wareHouse.phone} />
                </div>

                <div className="input-wrapper">
                    <i className="fa fa-location-dot"></i>
                    <input type="text" placeholder="آدرس کامل انبار" name='address' value={wareHouse.address}/>
                </div>
                <div style={{ display: "flex", width: "65%", gap: "10px" }}>

                    <div className="input-wrapper" >
                        <i className="fa fa-user-tie"></i>
                        <input type="text" placeholder="مدیر انبار (اختیاری)" name='Manager' value={wareHouse.manager || "مدیر ندارد"}/>
                    </div>


                    <div className="input-wrapper">
                        <i className="fa fa-weight"></i>
                        <input type="text" placeholder="ظرفیت انبار" name='capacity' value={wareHouse.capacity}/>
                    </div>

                </div>
                <div style={{ display: "flex", width: "65%", gap: "10px" }}>
                             <div className="input-wrapper" >
                        <i className="fa fa-circle-half-stroke"></i>
                        <input type="text" placeholder="مدیر انبار (اختیاری)" name='Manager' value={wareHouse.situation}/>
                    </div>


                    <div className="input-wrapper">
                        <i className="fa fa-city"></i>
                        <input type="text" placeholder="ظرفیت انبار" name='capacity' value={wareHouse.city}/>
                    </div>

                </div>

                <input type='hidden' value="فعال" name='Situation' />

                <div id='flex-modal-btn' style={{}}>
                    <button className='dropbtn redbtn' onClick={onClose}>بستن</button>

                </div>
            </form>
        </Modal>
    );
}
