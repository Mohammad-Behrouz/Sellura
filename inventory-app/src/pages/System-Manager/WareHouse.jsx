import React, { useState, useEffect } from 'react'
import Header from "../../components/Header"
import AddWareHouse from '../Modals/WareHouse/AddWareHouse'
import WareHouseDetaile from "../Modals/WareHouse/WareHouseDetails"
import DeleteWareHouse from "../Modals/WareHouse/DeleteWareHouse"
import WareHouseEdit from "../Modals/WareHouse/WareHouseEdit"
import alertify from 'alertifyjs'


const WareHouse = () => {
    const [percentage, setPercentage] = useState(0)
    const [storage, setStorage] = useState(2000)
    const [filterBy, setFilterBy] = React.useState("جدید ترین")
    const [warehouse, setWareHouse] = useState([])
    const [deleteP, setDeleteP] = useState(false);

    const [detailP, setDetailP] = useState(0);
    const [deletingP, setDeletingP] = useState(0);



    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://localhost:44348/api/WareHouse");
            const json = await res.json();
            setWareHouse(json)
        }
        fetchProducts();
    }, [])

    const deleteProduct = async (id) => {
        if (id == 0) {
            console.log("آیدی صفره");
            return;

        }
        try {
            const res = await fetch("https://localhost:44348/api/WareHouse/" + id, {
                method: "Delete"
            })
            if (res.ok) {
                alertify.success("حذف موفقیت آمیز بود")
                setWareHouse(prev => prev.filter(p => p.warehouseID !== id));
                closeDelete()
            } else {
                alertify.error("خطای سمت سرور رخ داد")
            }
        } catch (error) {
            console.log(error);
        }
    }


    const submitAddWareHouse = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name")?.trim();
        const address = formData.get("address")?.trim();
        const capacity = formData.get("capacity")?.trim();
        const City = formData.get("City")?.trim();
        const Phone = formData.get("Phone")?.trim();



        if (!name) return alertify.error("لطفا نام انبار را وارد کنید");
        if (!address) return alertify.error("لطفا آدرس انبار را وارد کنید");
        if (!capacity) return alertify.error("لطفا ظرفیت انبار را وارد کنید");
        if (!Phone) return alertify.error("لطفا تلفن انبار را وارد کنید");
        if (!City) return alertify.error("لطفا شهر انبار را وارد کنید");

        try {
            const res = await fetch("https://localhost:44348/api/WareHouse", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                alertify.error("افزودن انبار با مشکل مواجه شد");
                alertify.error(res);
                console.log(formData.entries());
                console.log(Object.fromEntries(formData))
                closeAddWareHouse();
            } else {
                alertify.success("کالا بصورت موفقیت آمیز در سیستم ثبت شد");
                const newWareHouse = {
                    name,
                    address,
                    capacity,
                    situation: "فعال",
                    city: City
                    , phone: Phone
                };
                setWareHouse(prev => [...prev, newWareHouse]);
                closeAddWareHouse();
            }

        } catch (error) {
            console.error(error);
            alertify.error("خطا در افزودن محصول");
        }
    };

    const EditWareHouse = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name")?.trim();
        const address = formData.get("address")?.trim();
        const capacity = formData.get("capacity")?.trim();
        const City = formData.get("City")?.trim();
        const Phone = formData.get("Phone")?.trim();
        const situation = formData.get("situation")?.trim();


        if (!name) return alertify.error("لطفا نام انبار را وارد کنید");
        if (!address) return alertify.error("لطفا آدرس انبار را وارد کنید");
        if (!capacity) return alertify.error("لطفا ظرفیت انبار را وارد کنید");
        if (!Phone) return alertify.error("لطفا تلفن انبار را وارد کنید");
        if (!City) return alertify.error("لطفا شهر انبار را وارد کنید");



        try {
            const res = await fetch("https://localhost:44348/api/WareHouse/" + detailP, {
                method: "PUT",
                body: formData,
            });

            if (!res.ok) {
                alertify.error("عملیات با خطا مواجه شد");
            } else {
                setWareHouse((prev) =>
                    prev.map((p) =>
                        p.warehouseID == parseInt(detailP)
                            ? {
                                name,
                                address,
                                capacity,
                                situation: situation,
                                city: City
                                , phone: Phone
                            }
                            : p
                    )
                );
                alertify.success("محصول با موفقیت ویرایش شد");
                closeEdit();
            }

        } catch (err) {
            console.error(err);
            alertify.error("خطا در ارسال اطلاعات");
        }
    };


    // استیت مودال ها
    const [addWareHouse, setAddWareHouse] = useState(false)
    const [seeDtails, setSeeDtails] = useState(false)
    const [Edit, setEdit] = useState(false)

    //باز و بسته کردن مودال ها
    const openAddWareHouse = () => {
        setAddWareHouse(true);
    }
    const closeAddWareHouse = () => setAddWareHouse(false);
    const openSeeDatail = (id) => {
        setDetailP(id);
        setSeeDtails(true);
    }
    const closeDatails = () => setSeeDtails(false);
    const openEdit = (id) => {
        setDetailP(id);
        setEdit(true);
    }
    const closeEdit = () => setEdit(false);
    const openDelete = (id) => {
        setDeletingP(id)
        setDeleteP(true);
    }
    const closeDelete = () => setDeleteP(false);


    //فانکشن های مودال ها
    const fetchAddingWareHouse = async () => {
        console.log("dalam");

    }



    useEffect(() => {
        const timer = setInterval(() => {
            setPercentage((prev) => {
                if (prev < 50) return prev + 1;
                clearInterval(timer);
                return prev;
            });
        }, 30);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Header icon="fa-solid fa-warehouse" title=" انبار ها" />
            <div id='ware-general-look'>
                <h4><i className="fa-solid fa-newspaper"></i> نگاه کلی به انبار ها</h4>
                <div id='ware-general-look-container'>
                    <div id='ware-general-look-chart'>
                        <h5 style={{ margin: "15px 20px 0 0" }}>ظرفیت انبار ها</h5>
                        <div style={{ display: "flex", height: "80%", alignItems: "center" }}>
                            <div style={{ width: "50%", height: "100%", display: "flex", justifyContent: "Center", alignItems: "center" }}>
                                <div id="progress-circle" style={{ background: `conic-gradient(#5A1899 0% ${percentage}%, #D3C4FF ${percentage}% 100%)` }}>
                                    <div id="progress-text" className='iran-sans-font'>
                                        {percentage}٪
                                        <small className='iran-sans-font'>({storage} کیلوگرم)</small>
                                    </div>
                                </div>
                            </div>
                            <div className='params-ware'>
                                <span>ظرفیت کل  &nbsp; <b>{storage * (percentage / 100)}</b></span><br />
                                <span>باقی مانده  &nbsp; <b>{storage * ((100 - percentage) / 100)}</b></span>
                            </div>
                        </div>
                    </div>
                    <div id='ware-general-look-stats'>
                        <h5 style={{ margin: "15px 20px 0 0" }}>ارزش کالا های انبار ها</h5>
                        <div id='params-div-2'>
                            <div>
                                <span>ارزش کل</span>
                                <b>12,000,000 ريال</b>
                            </div>
                            <div>
                                <span>سرمایه در خطر</span>
                                <b>2,000,000 ريال</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='ware-list'>
                <h4 style={{ textAlign: "right", width: "100%" }}><i className="fa-solid fa-newspaper"></i> لیست انبار ها</h4>
                <div style={{ display: "    flex", justifyContent: "space-between", width: "90%", height: "50px", margin: "10px 0" }}>
                    <div className='input-search'>
                        <input type="text" placeholder='جستجو....' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <button onClick={openAddWareHouse} className='dropbtn'>افزودن انبار</button>
                </div>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <td>نام انبار</td>
                                <td>شهر انبار</td>
                                <td>شماره تلفن </td>
                                <td>وضعیت انبار</td>
                                <td>عملیات</td>
                            </tr>
                        </thead>
                        <tbody>
                            {warehouse.map((value, index) => {
                                return (
                                    <tr key={index} >
                                        <td className='iran-sans-font'>{value.name}</td>
                                        <td >{value.city}</td>
                                        <td className='iran-sans-font'>{value.phone}</td>
                                        <td className='iran-sans-font'><span style={{
                                            backgroundColor:
                                                value.situation == "فعال" ? "#1F7D53" : "#D76C82", color: "white",padding : value.situation == "فعال" ? "2px 30px" : "2px 14px", borderRadius: "5px" 
                                        }}>{value.situation}</span></td>
                                        <td>
                                            <button onClick={() => openSeeDatail(value.warehouseID)} className='little-icon-button'><i className="fa-solid fa-eye"></i></button>
                                            <button onClick={() => openEdit(value.warehouseID)} className='little-icon-button'><i className="fa-solid fa-pen"></i></button>
                                            <button className='little-icon-button' onClick={() => openDelete(value.warehouseID)}><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                </div>
            </div>

            <div id='ware-list'>

                <h4 style={{ textAlign: "right", width: "100%" }}><i className="fa-solid fa-newspaper"></i> لیست فاکتور ها</h4>
                <div style={{ width: "100%", margin: "10px" }}>

                    <span>فیتلر بر اساس :</span>
                    <div className="dropdown">
                        <button className="dropbtn" >{filterBy} <i className="fa-solid fa-chevron-down"></i></button>
                        <div className="dropdown-content" style={{ marginRight: "10px" }}>
                            <button onClick={() => setFilterBy("جدید ترین")} >جدید ترین</button>
                            <button onClick={() => setFilterBy("گران ترین")}>گران ترین</button>
                            <button onClick={() => setFilterBy("وضعیت پرداخت")}>وضعیت پرداخت</button>
                        </div>
                    </div>
                </div>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <td>شماره فاکتور</td>
                                <td>ورودی/خروجی</td>
                                <td> مبلغ کل</td>
                                <td>وضعیت فاکتور</td>
                                <td>تاریخ صدور</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1000235</td>
                                <td>ورودی</td>
                                <td>1,000,000</td>
                                <td>پرداخت شده</td>
                                <td>1400/1/2</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
            <AddWareHouse isOpen={addWareHouse} onClose={closeAddWareHouse} fetch={submitAddWareHouse} />
            <WareHouseDetaile isOpen={seeDtails} id={detailP} onClose={closeDatails} />
            <WareHouseEdit isOpen={Edit} onClose={closeEdit} id={detailP} fetchData={EditWareHouse} />
            <DeleteWareHouse isOpen={deleteP} onClose={closeDelete} id={deletingP} deleteProduct={deleteProduct} />
        </>
    )
}
export default WareHouse