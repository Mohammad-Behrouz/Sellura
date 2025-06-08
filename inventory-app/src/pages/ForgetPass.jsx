import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPass = () => {
    return (
        <div id='main-container-of-login'>
            <div id='container-of-login'>
                <div id='logo-container' className='bgc-linear'>
                    <img src="/Images/logo.png" alt="" />
                </div>
                <div id='container-of-login-inputs'>

                    <form action="/#" method="post">
                        <h3>فراموشی رمز عبور</h3>

                        <div className="input-wrapper">
                            <i className="fa fa-at"></i>
                            <input type="text" required placeholder="نام کاربری" />
                        </div>
                        
                        <button type='submit'> ارسال کد</button>
                        <Link to="/">ورود به سلورا</Link>
                        <Link to="/login/forgetUn">فراموشی نام کاربری</Link>
                        {/* <Link to="/ContactUs">ارتباط با ما</Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgetPass