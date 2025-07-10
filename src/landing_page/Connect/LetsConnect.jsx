import '../../styles/letsConnect.css'
import resume from '../../assets/file/Resume.pdf'
function LetsConnect() {
    return (

        <div className="container">
            <div className="row">
                <div className="col letsConnect">

                    <button className="btn btn-primary letsConnect-btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Let's Connect</button>

                    <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header">
                            <h5 id="offcanvasTopLabel">Contact Me</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body text-start ">
                            <a className='text-decoration-none' href="mailto:hshreekantha7@gmail.com"> <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp; hshreekantha7@gmail.com</a>
                            <br />
                            <a className='text-decoration-none' href="tel:+91 80958 51853"><i className="fa-solid fa-phone"></i>&nbsp;&nbsp; +91 80958 51853</a>
                            <br />
                            <a className='text-decoration-none' href="https://www.linkedin.com" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;&nbsp; https://www.linkedin.com</a>
                            <br />
                            <a className='text-decoration-none' href={resume} target='_blank'>
                                <i className="fa-solid fa-file"></i>&nbsp;&nbsp; Resume/CV
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LetsConnect;