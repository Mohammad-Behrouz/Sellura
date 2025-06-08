import React from 'react'
import "../styles/login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div id='main-container-of-login'>
      <div id='container-of-login'>
        <div id='logo-container' className='bgc-linear'>
          <img src="/Images/logo.png" alt="" />
        </div>
        <div id='container-of-login-inputs'>

          <form action="/#" method="post">
            <h3>ورود به سلورا</h3>

            <div className="input-wrapper">
              <i className="fa fa-user"></i>
              <input type="text" required placeholder="نام کاربری" />
            </div>
            <div className="input-wrapper">
              <i className="fa-solid fa-lock"></i>
              <input type="password" required placeholder="رمز عبور" />
            </div>
            <button type='submit'> ورود</button>
            <Link to="/login/forgetPass">فراموشی رمز عبور</Link>
            <Link to="/login/forgetUn">فراموشی نام کاربری</Link>
            {/* <Link to="/ContactUs">ارتباط با ما</Link> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login