import { useNavigate } from 'react-router-dom';
import './Product.css'
import { useEffect, useState } from 'react';
function ProductComponent(){
    const [dataProduct, setDataProduct] = useState([])
    const [dataFall, setDataFall] = useState([])

    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://671a4254acf9aa94f6a9e192.mockapi.io/category")
            .then((res) => {
                return res.json();
            })
            .then((data) => {             
              setDataProduct(data.slice(0,5))
              setDataFall(data.slice(26,31))
            })
    },[]);
    const handleOnClick =(idCategory)=>{
        navigate(`/detail/${idCategory}`);
    }
    
    return(
        <>
            <section className="hot-products">
                <div className="container">
                    <div className="row-grid">
                        <p className="heading-text">Sản phẩm mới</p>
                    </div>
                    <div className="row-grid row-grid-hot-products">                     
                            {
                                dataProduct.map((value, key) => (
                                    <div className="hot-products-item" key={key}>
                                        <img src={value.image} alt="Default Image" className="default-img" onClick={() => handleOnClick(value.id)} />
                                        <a href="">
                                        <img src={value.imageHover} alt="" className="hover-img" onClick={() => handleOnClick(value.id)} /></a>
                                        <p style={{ fontSize: '20px', cursor:'pointer', color:'#000' }} onClick={() => handleOnClick(value.id)}>{value.name}</p>                                 
                                        <div className="hot-products-item-price">
                                            <p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.price)}<sup>đ</sup><span>{value.advice}</span><sup>đ</sup></p>
                                        </div>
                                    </div>
                                  
                                ))
                            }
                    
                    </div>

                    <div className="heading">
                        <p>FALL - WINTER COLLECTION 2024</p>
                    </div>
                    <div className="row-grid row-grid-hot-products">                     
                            {
                                dataFall.map((value, key) => (
                                    <div className="hot-products-item" key={key}>
                                        <img src={value.image} alt="Default Image" className="default-img" onClick={() => handleOnClick(value.id)} />
                                        <a href="">
                                        <img src={value.imageHover} alt="" className="hover-img" onClick={() => handleOnClick(value.id)} /></a>
                                        <p style={{ fontSize: '20px', cursor:'pointer', color:'#000' }} onClick={() => handleOnClick(value.id)}>{value.name}</p>                                 
                                        <div className="hot-products-item-price">
                                            <p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.price)}<sup>đ</sup><span>{value.advice}</span><sup>đ</sup></p>
                                        </div>
                                    </div>
                                  
                                ))
                            }
                    
                    </div>    
                </div>
            </section>

            
        </>
    )
}
export default ProductComponent