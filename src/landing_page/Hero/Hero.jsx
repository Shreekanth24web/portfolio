import '../../styles/hero.css'
import heroImg from '../../assets/hero-img.png'
import resume from '../../assets/file/Resume.pdf'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
function Hero() {
    const [text] = useTypewriter({
        words:['SHREEKANTHA','MERN STACK DEVELOPER','WEB DEVELOPER','REACT JS DEVELOPER'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:50,
    });
    return (
        <div className="container px-5" id='hero'>
            <div className="row d-flex align-items-center">
                <div className="col hero-text">
                    <h2>HELLO 👋</h2>
                    <h1>
                        I AM, <br /> 
                        <span className='text-color'>
                            {text}
                        </span>
                        <span>
                            <Cursor cursorStyle="_" cursorColor='#4c4cef'/>
                        </span>
                    </h1>
                    <h3 className='fs-5'>(MERN FULL STACK DEVELOPER)</h3>
                    <div className='hero-btns mt-3'>
                        <button className='btn btn-1'>HIRE ME</button>
                        <a href={resume} target='_blank'>
                            <button className='btn btn-2'>GET CV</button>
                        </a>
                    </div>
                </div>
                <div className="col hero-img">
                    <img src={heroImg} alt="hero_Img_Error" />
                </div>
            </div>
        </div>
    );
}

export default Hero;