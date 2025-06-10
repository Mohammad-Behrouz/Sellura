import React from "react";
import "../styles/invoice.css";

const InvoiceDetail = () => {
  const items = Array(5).fill({
    name: "پک نمکی",
    quantity: 3,
    unitPrice: 300000,
  });

  const totalPrice = items.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );

  return (
    <div className="invoice-container">
      {/* Main Content */}
      <main className="invoice-content">
        {/* Header */}
        <div className="invoice-header">
          <h1>فاکتور شماره 2000123</h1>
          <p>تاریخ ثبت: 1404/02/11</p>
          <p>فروشنده: فروشگاه شماره 1</p>
          <p>خریدار: متین توکلی</p>
        </div>

        {/* Table */}
        <table className="invoice-table">
          <thead>
            <tr>
              <th>شرح کالا</th>
              <th>تعداد</th>
              <th>قیمت واحد</th>
              <th>قیمت کل</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice.toLocaleString()}</td>
                <td>{(item.unitPrice * item.quantity).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Summary */}
        <div className="invoice-summary">
          <p>
            قیمت کل فاکتور:{" "}
            <span>{totalPrice.toLocaleString()} ریال</span>
          </p>
          <span className="status">وضعیت فاکتور: پرداخت شده</span>
        </div>

        {/* Buttons */}
        <div className="invoice-buttons">
          <button className="print">چاپ فاکتور</button>
          <button className="edit">ویرایش فاکتور</button>
          <button className="delete">حذف فاکتور</button>
        </div>
      </main>
    </div>
  );
};

export default InvoiceDetail;
