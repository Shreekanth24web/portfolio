import aboutImg from '../../assets/about-img.png'
import resume from '../../assets/file/Resume.pdf'
import '../../styles/about.css'
function About() {
    return (
        <div className="container mt-5" id='about'>
            <div className="row d-flex align-items-center">
                <div className="col mt-5 about-img">
                    <img className='mt-5' src={aboutImg} alt="about_Img_Error" />
                </div>
                <div className="col about-text">
                    <h1 className='fs-2 px-5'>LET'S, <br /> INTRODUCE <br />  ABOUT MYSELF</h1>
                    <div className='text-muted px-5 ' style={{ fontWeight: '400' }}>
                        <p>
                            Hello, my name is Shreekantha. <br />
                            I graduated in 2022 with a degree in Electrical Engineering.
                            I worked as a contract-based shift engineer at KPTCL, where I gained valuable hands-on
                            experience and professional discipline.
                        </p>
                        <br />
                        <p>
                        Over the past year, I have transitioned into the IT field and built strong skills in the MERN stack —
                        MongoDB, Express.js, React.js, and Node.js.
                        I have built several full-stack projects, which are available on my GitHub portfolio.<br />
                        My goal is to grow as a full-stack developer and contribute to impactful, technology-driven solutions.
                        I consider myself a hardworking, self-motivated individual who is always eager to learn, improve, and
                        take on new challenges.
                        </p>
                    </div>

                    <div className='about-btn px-5'>
                        <a href={resume} download='Shreekantha-Resume'>
                            <button className='btn download-btn '>DOWNLOAD CV</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;