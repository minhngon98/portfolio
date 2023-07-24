// Create your Footer component here
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: minhngon98@gmail.com</p>
                <p className="footer-contact-access">Mobile: 0931536430</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="https://www.facebook.com/minhngon.dng"><i><FaFacebook /></i></a>
                    <a href="https://www.instagram.com/comnam.cangu/"><i><FaInstagram /></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;