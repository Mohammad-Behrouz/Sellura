import React from 'react'
import Header from '../../components/Header'

const Products = () => {
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
                                <b tyle={{ direction: "rtl", width: "50%" }}>{50} نوع</b>
                            </div>
                        </div>
                    </div>
                    <div id='ware-general-look-stats'>
                        <h5 style={{ margin: "15px 20px 0 0" }}>ارزش کالا های فروشگاه ها</h5>
                        <div id='params-div-2'>
                            <button className="products-in-danger">مشاهده کالاهای رو به اتمام ({20})کالا  <i class="fa-solid fa-chevron-left"></i></button>
                            <button className="products-in-danger">مشاهده کالاهای در حال فاسد شدن ({10}) کالا  <i class="fa-solid fa-chevron-left"></i></button>
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
                    <button className='dropbtn'>افزودن کالا</button>
                </div>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <td>کد کالا</td>
                                <td>نام کاالا</td>
                                <td>مدیر کالا</td>
                                <td>وضعیت کالا</td>
                                <td>عملیات</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1000235</td>
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
        </>
    )
}

export default Products