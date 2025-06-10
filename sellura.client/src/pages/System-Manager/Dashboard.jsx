import React from 'react'
import Header from "../../components/Header"
import "../../styles/dashboard.css"

const Dashboard = () => {
  const [activeTab, setActiveTab] = React.useState("روزانه");
  const[filterBy , setFilterBy] = React.useState("جدید ترین")

  const tabs = ["روزانه", "هفتگی", "ماهانه", "سه ماهه", "سالانه", "کلی"];

  return (
    <>
      <Header icon="fa-solid fa-coins" title=" مالی" />
      <div>
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active-button-tap' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* نمودار فروش */}
      <div id='chart-of-dashboard'>
        <h4><i className="fa-solid fa-chart-line"></i> نمودار فروش </h4>
        <div id='chart-of-dashboard-div'>
          <div id='chart-of-dashboard-chart'></div>
          <div id='chart-of-dashboard-stats'>
            <div>
              <h5>متوسط فروش در هر بازه</h5>
              <h4>{ } - </h4>
              <span style={{ fontSize: "12px" }}>کالا</span>
            </div>
            <div>
              <h5>بیشترین فروش</h5>
              <span> { } - { } </span>
            </div>
            <div>
              <h5>کمترین فروش</h5>
              <span> { } - { } </span>
            </div>
          </div>
        </div>
      </div>
      {/*  گزارش کلی*/}
      <div id='container-of-reports'>
        <h4><i className="fa-solid fa-chart-simple"></i> گزارش کلی</h4>
        <div className='container-of-report-box'>
          <div className="reports-box">
            <span className='iran-sans-font' style={{ fontSize: "25px" }}>{ }60,000</span>
            <span style={{ fontSize: "12px" }}>کالا</span>
            <h4>خرید</h4>
            <h2 className='iran-sans-font'>12,000,000</h2>
            <span>{ } ریال</span>
          </div>
          <div className="reports-box">
            <span className='iran-sans-font' style={{ fontSize: "24px" }}>{ }50,000</span>
            <span style={{ fontSize: "12px" }}>کالا</span>
            <h4 >فروش</h4>
            <h2 className='iran-sans-font'>12,000,000</h2>
            <span>{ } ریال</span>
          </div>
          <div className="reports-box">
            <span className='iran-sans-font' style={{ color: "green", fontSize: "24px" }}>{ }23</span>
            <span style={{ fontSize: "12px" }}>درصد</span>
            <h4>سود خالص</h4>
            <h2 className='iran-sans-font'>12,000,000</h2>
            <span>{ } ریال</span>
          </div>
        </div>
      </div>
      {/* برترین ها */}
      <div id='container-of-bests'>
        <h4><i className="fa-solid fa-star"></i> برترین ها</h4>
        <div className='container-of-report-box'>
          <div className="reports-box">
            <i className="fa-solid fa-shop"></i>
            <span style={{ fontSize: "24px", marginTop: "5px" }}>نام فروشگاه</span>
            <span style={{ fontSize: "12px" }}> { } کالا فروخته شده</span>
            <button className='tab-button'>جزئیات</button>
          </div>
          <div className="reports-box">
            <i class="fa-solid fa-warehouse"></i>
            <span style={{ fontSize: "24px", marginTop: "5px" }}>نام انبار</span>
            <span style={{ fontSize: "12px" }}> { } کالا انبار شده</span>
            <button className='tab-button'>جزئیات</button>
          </div>
          <div className="reports-box">
            <i class="fa-solid fa-building"></i>
            <span style={{ fontSize: "24px", marginTop: "5px" }}>نام تامین کننده</span>
            <span style={{ fontSize: "12px" }}> { } کالا انبار شده</span>
            <button className='tab-button'>جزئیات</button>
          </div>
        </div>

      </div>
      {/* فاکتور ها */}
      <div id='factors'>
        <h4><i className="fa-solid fa-newspaper"></i> فاکتور ها</h4>
        <div>
          <span>فیتلر بر اساس :</span>
          <div class="dropdown">
            <button class="dropbtn" >{filterBy} <i className="fa-solid fa-chevron-down"></i></button>
            <div class="dropdown-content" style={{marginRight:"10px"}}>
              <button onClick={()=> setFilterBy("جدید ترین")} >جدید ترین</button>
              <button onClick={()=> setFilterBy("گران ترین") }>گران ترین</button>
              <button  onClick={()=> setFilterBy("وضعیت پرداخت")}>وضعیت پرداخت</button>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard