import './Footer.css'

import { FaFacebook, FaPinterest, FaInstagramSquare } from "react-icons/fa";
function FooterComponent(){
    return(
        <>
        <footer> 
            <div className="container"> 
                <div className="grow-grid">
                    <div className="footer-item">
                        <b>Download</b>
                        <div className="img-app">
                        <FaFacebook />
                        <FaPinterest />
                        <FaInstagramSquare />
                            <img src="https://pubcdn.ivymoda.com/ivy2/images/img-congthuong.png" />
                        </div>
                        <div className='imgapp-dowload'>
                            <img src="https://pubcdn.ivymoda.com/ivy2/images/appstore.png" alt="" width="100px" />
                            <img src="https://pubcdn.ivymoda.com/ivy2/images/googleplay.png" alt="" width="100px" />
                        </div>         
                    </div>
                    <div className="footer-item">
                        <b>Giới thiệu</b>
                        <p>IVY moda</p>
                        <p>Tuyển dụng</p>              
                    </div>
                    <div className="footer-item">
                        <b>Dịch vụ khách hàng</b>
                        <p>Chính sách điều khoản</p>
                        <p>Chính sách thanh toán</p>
                        <p>Chính sách đổi trả</p>
                        <p>Chính sách bảo hành</p>              
                    </div>
                    <div className="footer-item">
                        <b>Liên hệ</b>
                        <p>Hotline</p>
                        <p>Email</p>
                        <p>Live Chat</p>     
                    </div>
                    
                </div>
            </div>

            </footer>
    
            </>
    )
}
export default FooterComponent