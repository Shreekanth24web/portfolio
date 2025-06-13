import '../../styles/Contact.css';
function Contact() {
    return (

        <div className='contact' id="contact">
            <div className='contact-inner'>

                <div className='contact-head'>
                    <h1>CONTACT</h1>
                </div>

                <form>
                    <div className='form-group'>
                        <label htmlFor="">Fullname</label>
                        <input type="text" placeholder='H Shreekantha' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Email-id</label>
                        <input type="email" placeholder='hshreekantha7@gmail.com' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="">Phone</label>
                        <input type="text" placeholder='+91 80958 51853' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">About</label>
                        <textarea name="queries" placeholder='I have experience in building responsive web apps using React.js, JavaScript, and Bootstrap. I have developed projects like an OTP verifier, To-Do app, and Employee Manager. On the backend, I use Node.js, Express.js, and MongoDB to handle APIs and databases.' id="" cols="60" ></textarea>
                    </div>
                    <div className='form-submit'>
                        <button type='submit'>SEND</button>
                    </div>
                </form>


            </div>
        </div>

    );
}

export default Contact;