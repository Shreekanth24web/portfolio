import '../../../styles/Footer.css';
import { HashLink } from "react-router-hash-link";
import Logo from '../Logo';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillGithub } from "react-icons/ai"
function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <HashLink to='/#'>
                    <Logo />
                </HashLink>
            </div>
            <div className="footer-text">
                <p>@MERN stack developer </p>
            </div>

            <div className='footer-icons'>
                <a href="https://www.linkedin.com" target='_blank'> < AiFillLinkedin className='icon-footer' color="#0077B5" /></a>
                <a href="https://github.com" target='_blank'> <AiFillGithub className='icon-footer' color="#333" /></a>
            </div>

        </div>
    );
}

export default Footer;