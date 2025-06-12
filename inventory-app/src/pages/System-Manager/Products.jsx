import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import ProductDetail from "../Modals/Product/ProductDetails"
import ProductEdit from "../Modals/Product/ProductEdit"
import AddProduct from "../Modals/Product/AddProduct"
import DeleteProduct from "../Modals/Product/DeleteProduct"
import alertify from 'alertifyjs'

const Products = () => {
    // استیت مودال ها
    const [addWareHouse, setAddWareHouse] = useState(false)
    const [seeDtails, setSeeDtails] = useState(false)
    const [Edit, setEdit] = useState(false)
    const [products, setProducts] = useState([])
    const [deleteP, setDeleteP] = useState(false);

    const [detailP, setDetailP] = useState(0);
    const [deletingP, setDeletingP] = useState(0);


    //افزودن محصول
    const submitAddProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("Name")?.trim();
        const code = formData.get("Code")?.trim();
        const measurementUnit = formData.get("MeasurementUnit")?.trim();
        const minimumStock = formData.get("MinimumStuck")?.trim();
        const weight = formData.get("Weight")?.trim();
        const offer = formData.get("Offer")?.trim();

        if (!name) return alertify.error("لطفا نام کالا را وارد کنید");
        if (!code) return alertify.error("لطفا کد یکتای کالا را وارد کنید");
        if (!measurementUnit) return alertify.error("لطفا واحد اندازه‌گیری کالا را وارد کنید");
        if (!minimumStock) return alertify.error("لطفا حداقل موجودی را وارد کنید");
        if (!weight) return alertify.error("لطفا وزن کالا را وارد کنید");

        const parsedMinimumStock = parseFloat(minimumStock);
        const parsedWeight = parseFloat(weight);
        const parsedOffer = offer ? parseFloat(offer) : 0;

        if (isNaN(parsedMinimumStock) || parsedMinimumStock < 0) return alertify.error("حداقل موجودی باید عددی مثبت باشد");
        if (isNaN(parsedWeight) || parsedWeight <= 0) return alertify.error("وزن باید عددی مثبت باشد");
        if (offer && (isNaN(parsedOffer) || parsedOffer < 0 || parsedOffer > 100)) return alertify.error("درصد تخفیف باید بین 0 تا 100 باشد");

        try {
            const res = await fetch("https://localhost:44348/api/product", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                alertify.error("افزودن کالا با مشکل مواجه شد");
                console.log(formData.entries());
                console.log(Object.fromEntries(formData))
                closeAddWareHouse();
                
                
            } else {
                alertify.success("کالا بصورت موفقیت آمیز در سیستم ثبت شد");
                const newProduct = {
                    name,
                    code,
                    measurementUnit,
                    minimumStock: parsedMinimumStock,
                    weight: parsedWeight,
                    offer: parsedOffer,
                    id: Date.now(), // موقت، اگر ID از سرور نمی‌گیری، این‌طوری یکتا کن

                };

                setProducts(prev => [...prev, newProduct]);
                closeAddWareHouse(); // اگر میخوای بعد از موفقیت مودال رو ببندی
            }

        } catch (error) {
            console.error(error);
            alertify.error("خطا در افزودن محصول");
        }
    };

    const submitEdit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value.trim();
        const code = form.code.value.trim();
        const measurementUnit = form.measurementUnit.value.trim();
        const minimumStock = form.minimumStock.value.trim();
        const weight = form.weight.value.trim();
        const offer = form.offer?.value.trim() || 0;

        // اعتبارسنجی دقیق بر اساس فرم
        if (!name) return alertify.error("نام کالا الزامی است");
        if (!code) return alertify.error("کد کالا الزامی است");
        if (!measurementUnit) return alertify.error("واحد اندازه‌گیری الزامی است");
        if (!minimumStock) return alertify.error("حداقل موجودی الزامی است");
        if (!weight) return alertify.error("وزن الزامی است");

        const formData = new FormData();
        formData.append("Name", name);
        formData.append("Code", code);
        formData.append("MeasurementUnit", measurementUnit);
        formData.append("MinimumStuck", minimumStock);
        formData.append("Weight", weight);
        formData.append("Offer", offer);

        try {
            const res = await fetch("https://localhost:44348/api/product/" + detailP, {
                method: "PUT",
                body: formData,
            });

            if (!res.ok) {
                alertify.error("عملیات با خطا مواجه شد");
            } else {
                setProducts((prev) =>
                    prev.map((p) =>
                        p.productID == parseInt(detailP)
                            ? {
                                ...p,
                                name,
                                code,
                                measurementUnit,
                                minimumStock,
                                weight,
                                offer,
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



    const deleteProduct = async (id) => {
        if (id == 0) {
            console.log("آیدی صفره");
            return;

        }
        try {
            const res = await fetch("https://localhost:44348/api/product/" + id, {
                method: "Delete"
            })

            if (res.ok) {
                alertify.success("حذف موفقیت آمیز بود")
                setProducts(prev => prev.filter(p => p.productID !== id));
                closeDelete()
            } else {
                alertify.error("خطای سمت سرور رخ داد")
            }
        } catch (error) {
            console.log(error);
        }
    }
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

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://localhost:44348/api/product");
            const json = await res.json();
            setProducts(json)
        }
        fetchProducts();
    }, [])


    return (
        <>
            <Header icon="fa-solid fa-box" title="کالا ها" />
            <div id='ware-general-look'>
                <h4><i className="fa-solid fa-newspaper"></i> نگاه کلی کالا ها</h4>
                <div id='ware-general-look-container'>
                    <div id='ware-general-look-stats'>
                        <h5 style={{ margin: "15px 20px 0 0" }}>ارزش کالا های فروشگاه ها</h5>
                        <div id='params-div-2'>
                            <div>
                                <span>تعداد کل کالاها</span>
                                <b style={{ direction: "rtl" }}>{400} عدد (500) کیلوگرم</b>
                            </div>
                            <div>
                                <span>دسته بندی</span>
                                <b style={{ direction: "rtl", width: "50%" }}>{50} نوع</b>
                            </div>
                        </div>
                    </div>
                    <div id='ware-general-look-stats'>
                        <h5 style={{ margin: "15px 20px 0 0" }}>ارزش کالا های فروشگاه ها</h5>
                        <div id='params-div-2'>
                            <button className="products-in-danger">مشاهده کالاهای رو به اتمام ({20})کالا  <i className="fa-solid fa-chevron-left"></i></button>
                            <button className="products-in-danger">مشاهده کالاهای در حال فاسد شدن ({10}) کالا  <i className="fa-solid fa-chevron-left"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div id='ware-list'>
                <h4 style={{ textAlign: "right", width: "100%" }}><i className="fa-solid fa-newspaper"></i> لیست دسته بندی ها</h4>
                <div style={{ display: "flex", justifyContent: "space-between", width: "90%", height: "50px", margin: "10px 0" }}>
                    <div className='input-search'>
                        <input type="text" placeholder='جستجو....' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <button className='dropbtn'>افزودن دسته بندی</button>
                </div>
                <div className='category-container'>
                    <div className="category">
                        <i className="fa-solid fa-cookie-bite"></i> کوکی ها
                    </div>
                    <div className="category">
                        <i className="fa-solid fa-wine-bottle"></i> نوشیدنی ها
                    </div>
                    <div className="category">
                        <i className="fa-solid fa-lemon"></i> میوه ها
                    </div>
                    <div className="category">
                        <i className="fa-solid fa-cookie-bite"></i> کوکی ها
                    </div>
                    <div className="category">
                        <i className="fa-solid fa-wine-bottle"></i> نوشیدنی ها
                    </div>
                    <div className="category">
                        <i className="fa-solid fa-lemon"></i> میوه ها
                    </div>
                    <div className="category">
                        <i className="fa-solid fa-cookie-bite"></i> کوکی ها
                    </div>
                    <div className="category">
                        <i className="fa-solid fa-wine-bottle"></i> نوشیدنی ها
                    </div>
                    <div className="category">
                        <i className="fa-solid fa-lemon"></i> میوه ها
                    </div>

                </div>
            </div>

            <div id='ware-list'>
                <h4 style={{ textAlign: "right", width: "100%" }}><i className="fa-solid fa-newspaper"></i> لیست کالا ها</h4>
                <div style={{ display: "flex", justifyContent: "space-between", width: "90%", height: "50px", margin: "10px 0" }}>
                    <div className='input-search'>
                        <input type="text" placeholder='جستجو....' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <button onClick={openAddWareHouse} className='dropbtn'>افزودن کالا</button>
                </div>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <td>کد کالا</td>
                                <td>نام کاالا</td>
                                <td>کتگوری</td>
                                <td >موجودی</td>
                                <td >تخفیف</td>
                                <td>عملیات</td>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((value, index) => {
                                return (
                                    <tr key={index} >
                                        <td className='iran-sans-font'>{value.code}</td>
                                        <td>{value.name}</td>
                                        <td className='iran-sans-font'>{value.categoryID}</td>
                                        <td className='iran-sans-font'></td>
                                        <td className='iran-sans-font'>{value.offer}</td>
                                        <td>
                                            <button onClick={() => openSeeDatail(value.productID)} className='little-icon-button'><i className="fa-solid fa-eye"></i></button>
                                            <button onClick={() => openEdit(value.productID)} className='little-icon-button'><i className="fa-solid fa-pen"></i></button>
                                            <button className='little-icon-button' onClick={() => openDelete(value.productID)}><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>

                </div>
            </div>
            <AddProduct isOpen={addWareHouse} onClose={closeAddWareHouse} fetch={submitAddProduct} />
            <ProductDetail isOpen={seeDtails} onClose={closeDatails} id={detailP} />
            <ProductEdit isOpen={Edit} onClose={closeEdit} submitEdit={submitEdit} id={detailP} />
            <DeleteProduct isOpen={deleteP} onClose={closeDelete} id={deletingP} deleteProduct={deleteProduct} />
        </>
    )

}

export default Products