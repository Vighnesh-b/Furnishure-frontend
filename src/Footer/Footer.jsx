import './Footer.css';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import '../styles/fonts.css';
function Footer(){
    return(
        <footer >
            <h1 >Furnishure</h1>
            <p>internationally Trusted Furniture</p>
            <div className="footer-icons">
                <i><FaTwitter /></i>
                <i><FaFacebookF /></i>
                <i><FaGoogle /></i>
                <i><FaInstagram /></i>
            </div>
            <div className="copyright">&copy;Copyright <strong><span>Furnishure</span></strong>. All Rights Reserved</div>
        </footer>
    );
}

export default Footer