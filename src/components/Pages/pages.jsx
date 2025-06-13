import Home from "./Home";
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Pages() {
    return (
        <div>
            <Home />
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default Pages;