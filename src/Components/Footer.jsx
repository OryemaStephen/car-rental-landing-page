import { Image } from "react-bootstrap";
import { FaArrowCircleUp, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div id="footer" className="container-fluid bg-black text-white">
        <div className=" footer-detail container-fluid">
            <div className="footer-main">
                <Image src="./src/assets/logo.png" className="logo pb-3"/>
                <p>
                    We are a well-known car rental service that 
                    has many partners in each region to conect with you to 
                    assist in your trip in meetings, events, holidays or long trips.
                </p>
                <div>
                    <FaLinkedin />
                    <FaTwitter />
                    <FaFacebook />
                    <FaInstagram />
                </div>
            </div>

            <div className="company">
            <div className="footer-company">
                <h4>Company</h4>
                <p><a href="#">Home</a></p>
                <p><a href="#about">About Us</a></p>
                <p><a href="#footer">Contact Info</a></p>
                <p><a href="#about">Our services</a></p>
                
            </div>

            <div className="footer-services">
                <h4>Services</h4>
                <p>Airport Transfers</p>
                <p>Ride-Hailing</p>
                <p>Corporate Accounts</p>
                <p>Hourly Rentals</p>
            </div>
            </div>

            <div className="footer-workhour">
                <h4>Work Gours</h4>
                <p><FaClock /> 9AM-5PM. Monday - Saturday</p>
                <p><FaPhone /> +256 770 000000</p>
                <p>
                    Our Support and Sales team is available 
                    24/7 to answer your inquiries
                </p>
            </div>

        </div>
        <div className="p-3 text-center position-relative border-top">
            <div >
                <a className=" position-absolute top-0 text-white " title="Scroll to top" href="#"><FaArrowCircleUp /></a>
            </div>
            <span>Copyright &copy; {year} Rent Cars | Developed by <a className="text-light" href="https://oryemasteph.netlify.app" target="_blank">Stephen</a></span>
        </div>
    </div>
  )
}

export default Footer