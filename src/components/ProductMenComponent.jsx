import { useContext, useEffect, useState } from "react"
import { FaPlus, FaAngleDoubleDown } from "react-icons/fa";
import '../components/Category.css'
import { Context } from "../utils/AppContext";
import { useNavigate, useParams } from "react-router-dom";

function ProductMenComponent(){
    const [dataCategory, setDataCategory] = useState([])
    const { idNav } = useParams()
    const navigate = useNavigate();
    const handleId =(idCategory)=>{
        navigate(`/detail/${idCategory}`);
    }
    useEffect(()=>{
        fetch("https://671a4254acf9aa94f6a9e192.mockapi.io/category?stt=" + idNav)
            .then(res => res.json())
            .then((data) => {
                setDataCategory(data)
            })
    },[idNav])

    return(
        <>
            <section className="cartegory">
        <div className="container">
            <div className="row">
                <div className="cartegory-left">
                    <ul>
                        <li className="cartegory-left-li"><a href="#">Nữ <FaPlus /></a>                            
                        </li>
                        <li className="cartegory-left-li"><a href="#">Nam<FaPlus /></a>                         
                        </li>
                        <li className="cartegory-left-li"><a href="">Trẻ em</a></li>
                        <li className="cartegory-left-li"><a href="">Bộ sưu tập</a></li>
                    </ul>
                </div>
                <div className="cartegory-right">
                    <div className="cartegory-right-top">
                        <div className="cartegory-right-top-item">
                            <button><span>Bộ lọc</span><FaAngleDoubleDown /></button>
                        </div>
                        <div className="cartegory-right-top-item">
                            <select>
                                <option value="">Sắp xếp</option>
                                <option value="">Giá từ thấp đến cao</option>
                                <option value="">Giá từ cao đến thấp</option>
                            </select>
                        </div>
                    </div>                    
                    <div className="cartegory-right-content">
                        {
                            dataCategory.map((value,key) => (
                                <div className="cartegory-right-content-item" key={key}>
                                    <a href=""><img src={value.image} alt="" className="default-img" onClick={() => handleId(value.id)} /></a>
                                    <p onClick={() => handleId(value.id)} style={{cursor:'pointer'}}>{value.name}</p>
                                    <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.price)}</span>
                                </div>
                            ))
                        }                    
                    </div>      
                </div>
            </div>
            
        </div>
     </section>
    </>
    )
}
export default ProductMenComponent