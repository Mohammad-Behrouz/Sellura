import React from 'react'
import { Link } from 'react-router-dom'

const ForgetUn = () => {
  return (
    <div id='main-container-of-login'>
            <div id='container-of-login'>
                <div id='logo-container' className='bgc-linear'>
                    <img src="/Images/logo.png" alt="" />
                </div>
                <div id='container-of-login-inputs'>

                    <form action="/#" method="post">
                        <h3>فراموشی نام کاربری</h3>

                        <div className="input-wrapper">
                            <i className="fa fa-phone"></i>
                            <input type="text" required placeholder="شماره تلفن" />
                        </div>
                        
                        <button type='submit'> ارسال نام کاربری</button>
                        <Link to="/">ورود به سلورا</Link>
                        <Link to="/login/forgetUn">فراموشی نام کاربری</Link>
                        {/* <Link to="/ContactUs">ارتباط با ما</Link> */}
                    </form>
                </div>
            </div>
        </div>
  )
}

export default ForgetUn