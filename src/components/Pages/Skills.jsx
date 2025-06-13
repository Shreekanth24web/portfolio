import { AiFillHtml5 } from 'react-icons/ai'
import { SiCss3, SiExpress, SiGit, SiJavascript, SiBootstrap, SiMongodb, SiNodedotjs, SiReact } from 'react-icons/si'
import '../../styles/skills.css'
function Skills() {
    return (


        <div className='skills' id='skills'>

            <h1 >SKILLS</h1>
            <div className="skills-logos">
                <div className="html skill-logo">
                    <AiFillHtml5 className='icon' color="#E54D26" />
                    <p>HTML</p>
                </div>
                <div className="css skill-logo">
                    <SiCss3 className='icon' color="#2965f1" />
                    <p>CSS</p>
                </div>
                <div className="js skill-logo">
                    <SiJavascript className='icon' color="#F0DB4F" />
                    <p>Javascript</p>
                </div>
                <div className="react skill-logo">
                    <SiReact className='icon' color="#61DAFB" />
                    <p>React Js</p>
                </div>
                <div className="nodejs skill-logo">
                    <SiNodedotjs className='icon' color='#6cc24a' />
                    <p>Node Js</p>
                </div>
                <div className="express skill-logo">
                    <SiExpress className='icon' color='#333333' />
                    <p>Express Js</p>
                </div>
                <div className="mangodb skill-logo">
                    <SiMongodb className='icon' color='3FA037' />
                    <p>MongoDB</p>
                </div>
                <div className='bootstrap skill-logo'>
                    <SiBootstrap className='icon' color="#563D7C" />
                    <p>BOOTSTRAP</p>
                </div>
                <div className="github skill-logo">
                    <SiGit className='icon' color="#333" />
                    <p>Git-Hub</p>
                </div>
            </div>
        </div>


    );
}

export default Skills;