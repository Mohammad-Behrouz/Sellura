import React from 'react'
import Header from '../../components/Header'

const Customers = () => {
  return (
    <>
            <Header icon="fa-solid fa-user" title="مشتری ها" />
            <div id='ware-general-look'>
                <h4><i className="fa-solid fa-newspaper"></i>وضعیت مشتری ها</h4>
                <div id='ware-general-look-container'>
                    <div id='ware-general-look-stats'>
                        <h5 style={{ margin: "15px 20px 0 0" }}>ارزش کالا های فروشگاه ها</h5>
                        <div id='params-div-2'>
                            <div>
                                <span>تعداد کل مشتری ها</span>
                                <b style={{ direction: "rtl" }}>{400} </b>
                            </div>
                            <div>
                                <span>تعداد مشتری های فعال</span>
                                <b tyle={{ direction: "rtl", width: "50%" }}>{50} </b>
                            </div>
                        </div>
                    </div>
                    <div id='ware-general-look-stats'>
                        <h5 style={{ margin: "15px 20px 0 0" }}>برترین مشتری ها</h5>
                        <div id='params-div-2'>
                            <button className="products-in-danger">متین توکلی ({20})کالا  <i class="fa-solid fa-chevron-left"></i></button>
                            <button className="products-in-danger">محمد بهروز ({10}) کالا  <i class="fa-solid fa-chevron-left"></i></button>
                        </div>
                    </div>
                </div>
            </div>

         
            <div id='ware-list'>
                <h4 style={{ textAlign: "right", width: "100%" }}><i className="fa-solid fa-newspaper"></i> لیست مشتری ها</h4>
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
                                <td>کد مشتری</td>
                                <td>نام مشتری</td>
                                <td>مدیر مشتری</td>
                                <td>وضعیت مشتری</td>
                                <td>عملیات</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='iran-sans-font'>1000235</td>
                                <td>مشتری شماره 1</td>
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

export default Customers