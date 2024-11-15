import { useNavigate } from 'react-router-dom';
import '../products/Product.css'
import { useEffect, useState } from 'react';
function ProductFallComponent(){
    const [dataProductFall, setDataProductFall] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://671a4254acf9aa94f6a9e192.mockapi.io/sanpham")
            .then((res) => {
                return res.json();
            })
            .then((data) => {             
                setDataProductFall(data)
            })
    },[]);
    const handleOnClick =(idCategory)=>{
        navigate(`/detail/${idCategory}`);
    }
    return(
        <>
            <section className="hot-products">
                <div className="container">
                    <div className="row-grid row-grid-hot-products">
                        {
                            dataProductFall.map((value, key)=>(
                        <div className="hot-products-item" key={key}>
                            <img src={value.image} alt="Default Image" className="default-img" />      
                            <a href="" ><img src={value.imagehover} alt="" className="hover-img" /></a>
                            <p onClick={() => handleOnClick(value.id)}>{value.name}</p>
                            <div className="hot-products-item-price">
                                <p>{value.price}<sup>đ</sup></p>
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
export default ProductFallComponent