import '../styles/footer.css'
import { HashLink } from 'react-router-hash-link'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

function Footer() {
    return (
        <nav className="footer-bar mt-5 p-2 navbar-expand-lg border-top navbar-light  top-0 bg-body-tertiary">
            <div className="container">
                <div className="row text-center">

                    <div>
                        <HashLink className="logo" to="/#">Shreekantha</HashLink>
                    </div>
                    <p className='footer-text'>@MERN stack developer </p>
                    <div className="col mb-3">
                        <a href="https://www.linkedin.com/in/hshreekantha" target='_blank'> < AiFillLinkedin className='icon-footer' color="#0077B5" /></a>
                        <a href="https://github.com/Shreekanth24web" target='_blank'> <AiFillGithub className='icon-footer' color="#333" /></a>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Footer;