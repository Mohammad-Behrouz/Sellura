import React from 'react'
import Header from '../../components/Header'

const Employees = () => {
  return (
    <>
        <Header icon="fa-solid fa-user-ti" title="کارمند ها" />
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
                                <td>کد کارمند</td>
                                <td>نام کارمند</td>
                                <td>مدیر کارمند</td>
                                <td>وضعیت کارمند</td>
                                <td>عملیات</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='iran-sans-font'>1000235</td>
                                <td>کارمند شماره 1</td>
                                <td>محمد بهروز</td>
                                <td>وضعیت کارمند</td>
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

export default Employees