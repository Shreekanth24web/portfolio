import '../../styles/contact.css'
function Contact() {
    return (
        <div className='container d-flex justify-content-center mt-5' id="contact">
            <div className='row contact-inner mt-5'>

                <div className='contact-head text-center mt-5'>
                    <h1>CONTACT</h1>
                </div>

                <form >

                    <div className='form-floating mb-3'>
                        <input type="text" placeholder='H Shreekantha' className="form-control" id="floatingInputName"  />
                        <label htmlFor="floatingInputName">Your Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className='form-floating mb-3'>
                        <input type="number" placeholder='+91 80958 51853' className="form-control" id="floatingInputNo"  />
                        <label htmlFor="floatingInputNo">Contact No.</label>
                    </div>

                     
                    <div className="form-floating mb-3">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                        <label htmlFor="floatingTextarea2">Comments</label>
                    </div>

                    <div className='form-submit'>
                        <button type='submit' className="btn btn-primary">SEND</button>
                    </div>

                </form>


            </div>
        </div>
    );
}

export default Contact;