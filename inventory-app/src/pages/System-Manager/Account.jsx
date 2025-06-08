import React from 'react'
import Header from '../../components/Header'

const Account = () => {
    return (
        <>
            <Header icon="fa-solid fa-user" title="حساب کاربری" />
            <div id="account-div">
                <div id='account-div-2'>

                    <div>
                        <span>نام و نام خانوادگی</span>
                        <div className="input-wrapper">
                            <i className="fa fa-user"></i>
                            <input type="text" required placeholder="نام کاربری" />
                        </div>
                    </div>
                    <div>
                        <span>نام کاربری</span>
                        <div className="input-wrapper">
                            <i className="fa fa-at"></i>
                            <input type="text" required placeholder="نام کاربری" />
                        </div>
                    </div>
                    <div>
                        <span>سمت</span>
                        <div className="input-wrapper">
                            <i className="fa fa-user-ti"></i>
                            <input type="text" required placeholder="نام کاربری" />
                        </div>
                    </div>
                    <div>
                        <span>شماره تلفن</span>
                        <div className="input-wrapper">
                            <i className="fa fa-mobile"></i>
                            <input type="text" required placeholder="نام کاربری" />
                        </div>
                    </div>
                    <div>
                        <span>رمز عبور جدید</span>
                        <div className="input-wrapper">
                            <i className="fa fa-lock"></i>
                            <input type="text" required placeholder="نام کاربری" />
                        </div>
                    </div>
                    <div>
                        <span>تکرار رمز عبور جدید</span>
                        <div className="input-wrapper">
                            <i className="fa fa-lock"></i>
                            <input type="text" required placeholder="نام کاربری" />
                        </div>
                    </div>
                </div>
                <button className="dropbtn">ثبت تغییرات</button>
                
            </div>
        </>
    )
}

export default Account