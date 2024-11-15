import React, { useContext, useEffect, useState } from 'react';
import './PaymentPage.css'; // Đảm bảo bạn tạo file CSS này
import { Context } from '../../utils/AppContext';
import axios from 'axios';

function PaymentPageComponent(){
  const {history} = useContext(Context)
  const totalAmount = history.reduce((total, value) => {
    return total + (value.dataCate.price * value.quantity);
  }, 0);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  useEffect(() => {
    const loadProvinces = async () => {
        try {
            const response = await axios.get('https://provinces.open-api.vn/api/p/');
            setProvinces(response.data);
            
        } catch (error) {
            console.error('Error fetching provinces:', error);
        }
    };

    loadProvinces();
}, []); // Chỉ chạy một lần khi component được mount

// Hàm để tải huyện khi tỉnh được chọn
useEffect(() => {
  const loadDistricts = async () => {
      if (selectedProvince) {
          try {
              const response = await axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince}`);
              setDistricts(response.data.districts); // Lưu danh sách huyện
          } catch (error) {
              console.error('Error fetching districts:', error);
          }
      } else {
          setDistricts([]); // Reset danh sách huyện nếu không có tỉnh được chọn
      }
  };

  loadDistricts();
}, [selectedProvince]); // Chạy mỗi khi selectedProvince thay đổi
  return (
   
      <section className="payment">
        <div className="container">
            <div className="payment-content">
                
                <div className="payment-content-right">
                    <div className="payment-content-right-button">                  
                        <div className="delivery-content-left-input-top-item">
                            <label>Họ tên <span style={{'color': 'red'}}></span></label>
                            <input type="text" />
                        </div>
                        <div className="delivery-content-left-input-top-item">
                            <label>Điên thoại <span style={{'color': 'red'}}>*</span></label>
                            <input type="text" />
                        </div>
                        <div className="delivery-content-left-input-top-item">
                            <label>Email<span style={{'color': 'red'}}>*</span></label>
                            <input type="text" /><br />
                        </div>                        
                    </div>
                    <div className='address'>
                    {/* <div className="address-one">
                            <label>Tỉnh/TP <span style={{'color': 'red'}}>*</span></label>
                            <select
                              value={selectedProvince}
                              onChange={(e) => {
                                  setSelectedProvince(e.target.value);
                              }}
                          >
                              <option value="">Chọn tỉnh</option>
                              {provinces.map((province) => (
                                  <option key={province.code} value={province.code}>
                                      {province.name}
                                  </option>
                              ))}
                          </select>
                        </div>
                        <div className="address-one">
                            <label>Quận/Huyện <span style={{'color': 'red'}}>*</span></label>
                            <select disabled={!selectedProvince}>
                                <option value="">Chọn huyện</option>
                                {districts.map((district) => (
                                    <option key={district.code} value={district.code}>
                                        {district.name}
                                    </option>
                                ))}
                            </select>
                          </div>
                        <div className="address-one">
                            <label>Phường/Xã<span style={{'color': 'red'}}>*</span></label>
                            
                        </div>                                            */}
                    </div>
                    {/* <div className="delivery-content-left-input-button">
                            <label>Đường <span style={{'color': 'red'}}>*</span></label>
                            <input type="text" />
                        </div> */}
                    <div className="delivery-content-right">
                    <table>
                      <thead>
                        <tr>
                          <th>Tên sản phẩm</th>
                          <th>Số lượng</th>
                          <th>Thành tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          history.map((value,key)=>(
                            <tr key={key}>
                              <td>{value.dataCate.name}</td>
                              <td>{value.quantity}</td>
                              <td><p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.dataCate.price * value.quantity)}<sub>đ</sub></p></td>
                            </tr>
                          ))
                        }                                             
                        <tr>
                          <td colSpan="2" style={{ fontWeight: 'bold' }}>Tổng tiền hàng</td>
                          <td style={{ fontWeight: 'bold' }}><p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalAmount)}<sup>đ</sup></p></td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                </div>              
            </div>
            <div className="payment-content-right-payment">
                <button><a href="">THANH TOÁN</a></button>
            </div>
        </div>
    </section>  
  )
}

export default PaymentPageComponent