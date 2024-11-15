import { useContext, useState } from 'react'
import './Cart.css'
import { Context } from '../../utils/AppContext'
import { Link, useNavigate } from 'react-router-dom';
function CartComponent(){
    const {history, setHistory} = useContext(Context)
    const navigate = useNavigate()
    const DeleteMovieSeen =(addCart)=>{
        if(addCart > -1){
            setHistory((current) => current.filter((v,k) => k !== addCart))
        }
    }
    const handleOnClick =(idCategory)=>{
        navigate(`/detail/${idCategory}`);
    }
    const [value, setValue] = useState({ quantity: 0 });

    // Hàm xử lý thay đổi cho ô nhập liệu
    const handleChange = (event) => {
        const newValue = event.target.value;

        // Cập nhật state với giá trị mới, chuyển đổi thành số nếu không rỗng
        setValue({ quantity: newValue === '' ? '' : Number(newValue) });
    };

    // Hàm xử lý nhấp chuột để tăng quantity
    const handleIncrement = () => {
        setValue((prevValue) => ({ quantity: prevValue.quantity + 1 }));
    };
    return (
        <>
        <section className="cart">
        <div className="container">
            <div className="cart-content">
                <div className="cart-content-left">
                    <form>
                    <table>
                        <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Tên sản phẩm</th>                       
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                history.length > 0 ? 
                                history.map((value, key)=>(
                                    <tr key={key}>
                                        <td><img src={value.dataCate.image} alt="" onClick={()=>handleOnClick(value.dataCate.id)}/></td>
                                        <td><p onClick={()=>handleOnClick(value.dataCate.id)}>{value.dataCate.name}</p></td>                                                                          
                                        <td><input type="number" value={value.quantity} onChange={handleChange} onClick={handleIncrement} /></td>
                                        <td><p>
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.dataCate.price * value.quantity)}</p>
                                        </td>
                                        <td onClick={() => DeleteMovieSeen(key)}><span>X</span></td>
                                    </tr>

                                        ))                                                          
                                    :<h6 style={{color: 'red'}}>Bạn chưa thêm vào giỏ hàng</h6>                                                                                                        
                            }
                                              
                        </tbody>                    
                    </table>
                    </form>
                    
                </div>
                <div className="cart-content-right">

                    <div className="cart-content-right-button">
                        <a href="/"><button>TIẾP TỤC MUA SẮM</button></a>
                        {/* <Link to="/payment"> */}
                            <button className="payment-button" style={{color:'white'}}>TIẾP TỤC THANH TOÁN</button>
                        {/* </Link> */}
                    </div>
                    <div className="cart-content-right-dangnhap">
                        <p>Tài khoản IVY</p>
                        <p>Hãy <a style={{"color": 'red'}}>Đăng nhập </a>tài khoản của bạn để tích điểm thành viên</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
            
        </>       
    )
}
export default CartComponent