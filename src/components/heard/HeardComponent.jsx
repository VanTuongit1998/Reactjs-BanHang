import { useEffect, useRef, useState} from 'react'
import './Heard.css'
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci"
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HeardComponent(){
    const [dataHeard, setDataHeard] = useState([])
    const [keyword,setKeyword] =useState("")
    const [searchDebounce,setSearchDebounce] = useState("")
    const navigate = useNavigate();
    // const handleShow = () =>{
    //     navigate('/cart');      
    // }
    useEffect(() => {
        fetch("https://6726636c302d03037e6d6681.mockapi.io/navbar")
            .then(res => res.json())
            .then((data) => {
                setDataHeard(data)
            })
    },[])
    const handleOnclick =(idNav)=>{
        navigate(`/product-men/${idNav}`);
    }
    const handleChange = (e) =>{
        setKeyword(e.target.value)
        setShow(false)        
    }
    const handleKeyWord = (keyword) =>{
        setKeyword(keyword)
        setShow(false)        
    }
///////////////////////////////// 

    const [show, setShow] = useState(false);
    const inputRef = useRef(null);
    const formRef = useRef(null);

    const handleOnClickShow = () => {
        setShow(true);
    };

    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target) && inputRef.current && !inputRef.current.contains(event.target)) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

///////////////////////////
    useEffect(()=>{
    const debounceId = setTimeout(() => {
        setSearchDebounce(keyword)         
    }, 1000);
    return () => {
        clearTimeout(debounceId)
    }
    },[keyword])     
    useEffect(() => {
        if (searchDebounce !== "") {
            navigate(`/search/${searchDebounce}`);
        }
    }, [searchDebounce]);
    
    return(
        <>
            <header>
                <div className="logo" style={{ cursor: 'pointer' }}>
                    <a href='/'><img src="https://pubcdn.ivymoda.com/ivy2/images/logo.png" /></a>
                </div>
                <div className="menu">
                    {
                        dataHeard.map((value, key) => (
                            <li style={{ cursor: 'pointer' }} key={key}  onClick={() => handleOnclick(value.stt)} >{value.name}</li>
                        ))
                    }                 
                </div>
                <div className="others">
                    <li><input type="text" placeholder="Tim kiem" onChange={handleChange} onFocus={handleOnClickShow} ref={inputRef} /><CiSearch />
                    {
                        show && (
                            <div ref={formRef} className='tableSearch'>
                                <p>Tìm kiếm nhiều nhất</p>
                                <div className='buttonSearch'>
                                    <button onClick={()=>handleKeyWord('Áo')}>Áo</button>
                                    <button onClick={()=>handleKeyWord('Đầm')}>Đầm</button>
                                    <button onClick={()=>handleKeyWord('Quần')}>Quần</button>
                                    <button onClick={()=>handleKeyWord('vest')}>Vest</button>
                                    <button onClick={()=>handleKeyWord('croptop')}>Croptop</button>
                                    <button onClick={()=>handleKeyWord('Chân váy')}>Chân váy</button>
                                    
                                </div>
                                
                            </div>
                        )
                    }                  
                    </li>
                    <li><CiUser /></li>

                    <Link to="/cart"  style={{ cursor: 'pointer' }} ><CiShoppingCart /></Link>                    
                    </div>              
            </header>
        
        </>
    )
}
export default HeardComponent