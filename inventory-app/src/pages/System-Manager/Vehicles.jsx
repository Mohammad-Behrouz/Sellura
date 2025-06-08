import React, { useState ,useEffect} from 'react'
import Header from "../../components/Header"

const Vehicles = () => {
    const [percentage, setPercentage] = useState(0)
    const [storage, setStorage] = useState(2000)
    const [filterBy, setFilterBy] = React.useState("جدید ترین")


    useEffect(() => {
        const timer = setInterval(() => {
            setPercentage((prev) => {
                if (prev < 23) return prev + 1;
                clearInterval(timer);
                return prev;
            });
        }, 30);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Header icon="fa-solid fa-car" title=" خودرو ها" />
            <div id='ware-general-look'>
                <h4><i className="fa-solid fa-newspaper"></i> نگاه کلی به خودرو ها</h4>
                <div id='ware-general-look-container'>
                    <div id='ware-general-look-chart'>
                        <h5 style={{ margin: "15px 20px 0 0" }}>تعداد خودرو ها</h5>
                        <div style={{ display: "flex", height: "80%", alignItems: "center" }}>
                            <div style={{ width: "50%", height: "100%", display: "flex", justifyContent: "Center", alignItems: "center" }}>
                                <div id="progress-circle" style={{ background: `conic-gradient(#5A1899 0% ${percentage}%, #D3C4FF ${percentage}% 100%)` }}>
                                    <div id="progress-text" className='iran-sans-font'>
                                        {percentage}٪
                                        <small className='iran-sans-font'>({storage} عدد)</small>
                                    </div>
                                </div>
                            </div>
                            <div className='params-ware'>
                                <span >تعداد کل  &nbsp; <big className='iran-sans-font'>{storage *((100 - percentage) / 100) }</big></span><br />
                                <span>خودرو های آزاد &nbsp; <big className='iran-sans-font'>{storage *(percentage / 100) }</big></span>
                            </div>
                        </div>
                    </div>
                    <div id='ware-general-look-stats'>
                        <h5 style={{ margin: "15px 20px 0 0" }}>جزئیات حمل و نقل</h5>
                        <div id='params-div-2'>
                            <div>
                                <span>بار های درحال حمل و نقل</span>
                                <b>12,000,000 ريال</b>
                            </div>
                            <div>
                                <span>ارزش بار ها </span>
                                <b>2,000,000 ريال</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='ware-list'>
                <h4 style={{ textAlign: "right", width: "100%" }}><i className="fa-solid fa-newspaper"></i> لیست انبار ها</h4>
                <div style={{ display: "flex", justifyContent: "space-between", width: "90%", height: "50px", margin: "10px 0" }}>
                    <div className='input-search'>
                        <input type="text" placeholder='جستجو....' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <button className='dropbtn'>افزودن انبار</button>
                </div>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <td>کد خودرو</td>
                                <td>نام خودرو</td>
                                <td>مدیر خودرو</td>
                                <td>وضعیت خودرو</td>
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

                <h4 style={{ textAlign: "right", width: "100%" }}><i className="fa-solid fa-newspaper"></i> لیست بارنامه ها</h4>
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
                                <td>شماره بارنامه</td>
                                <td>وزن بار</td>
                                <td> مبلغ کل</td>
                                <td>وضعیت بار</td>
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
export default Vehicles