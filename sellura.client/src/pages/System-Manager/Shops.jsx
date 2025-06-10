import React, { use, useEffect, useState } from 'react'
import Header from "../../components/Header"

const Shops = () => {
    const [percentage, setPercentage] = useState(0)
    const [storage, setStorage] = useState(2000)
    const [filterBy, setFilterBy] = React.useState("جدید ترین")

    useEffect(() => {
        const timer = setInterval(() => {
            setPercentage((prev) => {
                if (prev < 70) return prev + 1;
                clearInterval(timer);
                return prev;
            });
        }, 30); 

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Header icon="fa-solid fa-shop" title=" فروشگاه ها" />
            <div id='ware-general-look'>
                <h4><i className="fa-solid fa-newspaper"></i> نگاه کلی فروشگاه ها</h4>
                <div id='ware-general-look-container'>
                    <div id='ware-general-look-chart'>
                        <h5 style={{ margin: "15px 20px 0 0" }}>ظرفیت فروشگاه ها</h5>
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
                                <span>ظرفیت کل  &nbsp; <big className='iran-sans-font'>{storage * (percentage / 100)}</big></span><br />
                                <span>باقی مانده  &nbsp; <big className='iran-sans-font'>{storage * ((100 - percentage) / 100)}</big></span>
                            </div>
                        </div>
                    </div>
                    <div id='ware-general-look-stats'>
                        <h5 style={{ margin: "15px 20px 0 0" }}>ارزش کالا های فروشگاه ها</h5>
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
                <h4 style={{ textAlign: "right", width: "100%" }}><i className="fa-solid fa-newspaper"></i> لیست فروشگاه ها</h4>
                <div style={{ display: "flex", justifyContent: "space-between", width: "90%", height: "50px", margin: "10px 0" }}>
                    <div className='input-search'>
                        <input type="text" placeholder='جستجو....' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <button className='dropbtn'>افزودن فروشگاه</button>
                </div>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <td>کد فروشگاه</td>
                                <td>نام فروشگاه</td>
                                <td>مدیر فروشگاه</td>
                                <td>وضعیت فروشگاه</td>
                                <td>عملیات</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='iran-sans-font'>1000235</td>
                                <td>انبار شماره 1</td>
                                <td>محمد بهروز</td>
                                <td>وضعیت انبار</td>
                                <td>
                                    <button className='little-icon-button'><i className="fa-solid fa-eye"></i></button>
                                    <button className='little-icon-button'><i className="fa-solid fa-pen"></i></button>
                                    <button className='little-icon-button'><i className="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

            <div id='ware-list'>

                <h4 style={{ textAlign: "right", width: "100%" }}><i className="fa-solid fa-newspaper"></i> لیست فاکتور ها</h4>
                <div style={{ width: "100%", margin: "10px" }}>

                    <span>فیتلر بر اساس :</span>
                    <div class="dropdown">
                        <button class="dropbtn" >{filterBy} <i className="fa-solid fa-chevron-down"></i></button>
                        <div class="dropdown-content" style={{ marginRight: "10px" }}>
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
                                <td className='iran-sans-font'>1000235</td>
                                <td>ورودی</td>
                                <td className='iran-sans-font'>1,000,000</td>
                                <td>پرداخت شده</td>
                                <td className='iran-sans-font'>1400/1/2</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}
export default Shops