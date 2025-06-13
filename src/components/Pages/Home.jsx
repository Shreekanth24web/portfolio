import '../../styles/home.css'
import homeImg from '../../assets/home-img.png'
import resume from '../../assets/file/Resume.pdf'
function Home() {
    return (
        <div>
            <div className='home' id='home'>
                
                <div className='home-text'>
                    <h2>HELLO 👋</h2>
                    <h1>I AM SHREEKANTHA</h1>
                    <h3>MERN FULL STACK DEVELOPER</h3>
                    <div className='home-btns'>
                        <button className='btn-1'>HIRE ME</button>
                        <a href={resume} target='_blank'>
                            <button className='btn-2'>GET CV</button>
                        </a>
                    </div>
                </div>

                <div className='home-img'>
                    <img src={homeImg} alt="Home_Img_Error" />
                </div>

            </div>
             
        </div>
    );
}

export default Home;