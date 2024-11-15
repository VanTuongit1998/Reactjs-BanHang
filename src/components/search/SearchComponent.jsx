import { useContext, useEffect, useState } from "react"
import { FaPlus, FaAngleDoubleDown } from "react-icons/fa";
import '../../components/Category.css'
import { useNavigate, useParams } from "react-router-dom";
function SearchComponent(){
    const [dataSearch, setDataSearch] = useState([])
    const [noData, setNoData] = useState(false);
    const { query } = useParams();
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`https://671a4254acf9aa94f6a9e192.mockapi.io/category?name=${query}`)
            .then(res => {
                if (res.status === 404) {
                    setNoData(true); // Set noData to true if 404
                    setDataSearch([]); // Clear any previous data
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                if (data) {
                    setDataSearch(data);
                    setNoData(false); // Reset noData if data is found
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    },[query])
    const handleOnclick = (idCategory) => {
        navigate(`/detail/${idCategory}`);
    };
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
                    <p style={{padding:'10px 5px 5px 10px'}}>Kết quả tìm kiếm: <span style={{color:'red'}}>{query}</span></p>                    
                    <div className="cartegory-right-content">
                        
                          {noData ? (
                            <h2 style={{color:'red', fontSize:'18px',paddingTop:'10px'}}>Không tìm thấy kết quả phù hợp.</h2>
                        ) : (
                            dataSearch.map((value,key) => (
                                <div className="cartegory-right-content-item" key={key}>
                                    <a href=""><img src={value.image} alt="" className="default-img" onClick={()=>handleOnclick(value.id)}/></a>
                                    <p onClick={()=>handleOnclick(value.id)} style={{cursor:'pointer'}}>{value.name}</p>
                                    <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.price)}<sup>đ</sup></span>
                                </div>
                            ))
                        )                                      
                        }                    
                    </div>      
                </div>
            </div>
            
        </div>
     </section>
    </>
    )
}
export default SearchComponent