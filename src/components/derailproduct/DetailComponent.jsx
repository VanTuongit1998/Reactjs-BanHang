import { useContext, useEffect, useState } from 'react';
import './Detail.css'
import { Context } from '../../utils/AppContext';
import { Badge } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
function DetailComponent(){
    const [dataCate, setDataCate] = useState({})
    const {history, setHistory} = useContext(Context)
    const [quantity, setQuantity] = useState(1);
    const {idCategory} = useParams()
    
    useEffect(() => {
        fetch("https://671a4254acf9aa94f6a9e192.mockapi.io/category/"+idCategory)
            .then((res) => {
                return res.json();
            })
            .then((data) => {             
                setDataCate(data)               
            })          
    },[idCategory]);
    
    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1); 
    };
    const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleOnClick = (dataCate, quantity) => {
        const newItem = { dataCate, quantity };   
        // Kiểm tra xem item đã tồn tại trong history chưa
        // if(!history.includes(newItem)){
        //     setHistory((current) => [... current, newItem])
        //     toast("Đã thêm vào giỏ hàng")
        // }
        setHistory((current) => {
            const existingItemIndex = current.findIndex(item => item.dataCate.id === newItem.dataCate.id);
    
            if (existingItemIndex !== -1) {
                // Nếu mục tồn tại, hãy cập nhật số lượng
                const updatedHistory = [...current];
                updatedHistory[existingItemIndex].quantity += quantity; // Increment the quantity
                return updatedHistory; // Return the updated history
            } else {
                // If the item does not exist, add it to the history
                
                return [...current, newItem];
            }
        });
        toast("Đã thêm vào giỏ hàng");  
    };
    return(
        <>
        
            {
               
                    <div className='detail'>
                        <div className="product-image">
                            <img src={dataCate.image} />
                        </div>
                        <div className="product-details">
                            <h1>{dataCate.name}</h1>
                            <p className="price">Giá: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((dataCate.price))} VNĐ</p>
                            <div className="product-content-right-product-color">
                            <div className="product-content-right-product-color-item">
                                <div className="product-content-right-product-color-img">
                                    <img src="https://pubcdn.ivymoda.com/ivy2/images/color/024.png" alt="" />
                                </div>
                                <div className="product-content-right-product-color-img">
                                    <img src="https://pubcdn.ivymoda.com/ivy2/images/color/041.png" alt="" />
                                </div>
                                <div className="product-content-right-product-color-img">
                                    <img src="https://pubcdn.ivymoda.com/ivy2/images/color/048.png" alt="" />
                                </div>
                                <div className="product-content-right-product-color-img">
                                    <img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" />
                                </div>                           
                            </div>
                            
                        </div>
                            
                            <div className="size">
                                <b>Size: </b>
                                <div>
                                    <span>S</span>
                                    <span>M</span>
                                    <span>L</span>
                                    <span>XL</span>
                                    <span>XXL</span>
                                </div>
                        </div>
                            <div className="quantity-selector">
                                <button onClick={handleDecrease}>-</button>
                                <span onChange={(e) => setQuantity(e.target.value)}>{quantity}</span>
                                <button onClick={handleIncrease}>+</button>
                            </div>
                            
                            <p className="description">{dataCate.der}</p>
                          
                            <button className="add-to-cart" onClick={() =>handleOnClick(dataCate,quantity)}>ADD TO CART</button>
                            
                            
                        </div>
                    </div>
                
            }
        <ToastContainer style={{marginTop:'60px'}} />
           
        </>
    )
}
export default DetailComponent