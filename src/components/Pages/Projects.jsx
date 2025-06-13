import bookStore from '../../assets/book-store.jpg'
import age from '../../assets/age.jpg'
import bulb from '../../assets/bulb.jpg'
import health from '../../assets/healthcare-img.png'
import shop from '../../assets/e-commerce.jpg'
import wanderlust from '../../assets/wanderlust-img.png'
import otp from '../../assets/otp.jpg'
import todo from '../../assets/to-do-App.jpg'
import employee from '../../assets/Employe-data-table.jpg' 
import '../../styles/projects.css'
function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>PROJECTS</h1>
            <div className="card">

                <div className="card-body">
                    <a href="https://healthcare-oi3r.onrender.com" target="_blank" rel="noopener noreferrer">
                        <img src={health} alt="health_img_Error" />
                        <p>
                            This is a static, responsive healthcare dashboard built using React. It showcases a clean UI with well-structured components for visualizing health information, appointments, and activity. Though it's a frontend-only page, it effectively demonstrates modern layout and design practices.
                        </p>
                    </a>
                </div>
                <div className="card-body">
                    <a href="https://shreekanth24web.github.io/React-E-commerce-site/" target='_blank'>
                        <img src={shop} alt="demo_img_Error" />
                        <p>
                            This is a fully responsive e-commerce website built with React.js that functions as a Single Page Application (SPA). It offers smooth navigation across sections like Men, Women, and Kids, simulating a real shopping experience.

                        </p>
                    </a>
                </div>
                <div className="card-body">
                    <a href="https://wanderlust-n662.onrender.com/listings" target='_blank'>
                        <img src={wanderlust} alt="demo_img_Error" />
                        <p>
                            This is a full-stack MERN application with complete CRUD operations, enabling users to create, read, update, and delete property listings. It features dynamic search, responsive UI, and seamless navigation for a real-time travel booking experience.

                        </p>
                    </a>
                </div>

                <div className="card-body">
                    <a href="https://shreekanth24web.github.io/Book-store-register-data/" target='_blank'>
                        <img src={bookStore} alt="demo_img_Error" />
                        <p>
                            This is a JavaScript-based Book Store Register app styled with Bootstrap. It enables users to add, edit, and delete records like name, book name, registration number, etc., with responsive design and clean UI using Bootstrap components and classes for form styling and tables.

                        </p>
                    </a>
                </div>

                <div className="card-body">
                    <a href="https://shreekanth24web.github.io/Age-Calculator/" target='_blank'>
                        <img src={age} alt="demo_img_Error" />
                        <p>
                            This project calculates a user's age based on the input birthdate using JavaScript logic.

                            It includes a stylish gradient background and animated visuals for a fun user experience.
                        </p>
                    </a>
                </div>
                <div className="card-body">
                    <a href="https://shreekanth24web.github.io/Turn-ON-Off-blub/" target='_blank'>
                        <img src={bulb} alt="demo_img_Error" />
                        <p>
                            This is a simple JavaScript project that allows users to turn a light bulb on and off with a single click of a button. It visually demonstrates basic DOM manipulation, where clicking the button changes the bulb image source to simulate the light being turned on or off.
                        </p>
                    </a>
                </div>
                <div className="card-body">
                    <a href="https://shreekanth24web.github.io/React-OTP-verification/" target='_blank'>
                        <img src={otp} alt="demo_img_Error" />
                        <p>
                            This project is built using React.js with Bootstrap for styling. It allows users to generate and verify OTPs, providing instant validation feedback. It demonstrates core React concepts like state management and conditional rendering, useful for basic authentication workflows.
                        </p>
                    </a>
                </div>
                <div className="card-body">
                    <a href="https://shreekanth24web.github.io/To-do-App/" target='_blank'>
                        <img src={todo} alt="demo_img_Error" />
                        <p>
                            This is a simple React-based To-Do app that allows users to add, edit, and delete tasks. Each task is displayed with a title, date, and description for better task management. The project demonstrates the use of React hooks like useState for state handling and basic CRUD functionality.
                        </p>
                    </a>
                </div>
                <div className="card-body">
                    <a href="https://shreekanth24web.github.io/Employe-Data-Table-01/" target='_blank'>
                        <img src={employee} alt="demo_img_Error" />
                        <p>
                            This Employee Management App is developed using JavaScript for handling dynamic data operations. It provides a simple interface to add, edit, delete, and search employees, along with displaying details like name, ID, email, office code, and job role. The app ensures a clean layout with profile display with user interaction.
                        </p>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Projects;