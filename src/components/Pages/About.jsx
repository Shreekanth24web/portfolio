import aboutImg from '../../assets/about-img.png'
import resume from '../../assets/file/resume.pdf'
import '../../styles/about.css'
function About() {
    return (
        <div className='about'>

            <div className='about-img' id='about'>
                <img src={aboutImg} alt="about_Img_Error" />
            </div>

            <div className='about-text'>

                <h1>LET'S<br /> INTRODUCE ABOUT<br /> MYSELF</h1>
                <p>
                    Hello, my name is Shreekantha.<br />
                    I graduated in 2022 with a degree in Electrical Engineering. <br />
                    I worked as a contract-based shift engineer at KPTCL, where I gained valuable hands-on <br /> 
                    experience and professional discipline.<br />
                    <br />
                    Over the past year, I have transitioned into the IT field and built strong skills in the MERN stack— <br />
                    MongoDB, Express.js, React.js, and Node.js. <br />
                    I have built several full-stack projects, which are available on my GitHub portfolio.<br />
                    My goal is to grow as a full-stack developer and contribute to impactful, technology-driven solutions. <br />
                   I consider myself a hardworking, self-motivated individual who is always eager to learn, improve, and<br />
                    take on new challenges.<br />
                </p>

                <div className='about-btn'>
                    <a href={resume} download='Shreekantha-Resume'>
                        <button className='download-btn'>DOWNLOAD CV</button>
                    </a>
                </div>

            </div>

        </div>

    );
}

export default About;