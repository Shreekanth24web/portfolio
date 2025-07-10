import { AiFillHtml5 } from 'react-icons/ai'
import { SiCss3, SiExpress, SiGit, SiJavascript, SiBootstrap, SiMongodb, SiNodedotjs, SiReact, SiPostman } from 'react-icons/si'
import '../../styles/skills.css'
function Skills() {
    return (

        <div className="contaier p-5 mt-5" id="skills">
            <h1 className='mb-5 mt-5 mb-5 text-center text-head ' >
                <button className='fs-3'>SKILLS</button>
            </h1>
            <div className="skill-section">

                <div className="row text-center mt-5 mb-5 d-flex gap-4 ">


                    <div className="col skill-logo mb-5  html">
                        <AiFillHtml5 className='icon' color="#E54D26" />
                        <p >HTML</p>
                    </div>
                    <div className=" col skill-logo mb-5 css ">
                        <SiCss3 className='icon' color="#2965f1" />
                        <p>CSS</p>
                    </div>
                    <div className="col skill-logo mb-5">
                        <SiJavascript className='icon' color="#F0DB4F" />
                        <p>Javascript</p>
                    </div>

                    <div className="col skill-logo mb-5">
                        <SiReact className='icon' color="#61DAFB" />
                        <p>React Js</p>
                    </div>
                    <div className="col skill-logo mb-5">
                        <SiNodedotjs className='icon' color='#6cc24a' />
                        <p>Node Js</p>
                    </div>

                </div>

                <div className="row text-center d-flex gap-4 mt-5">

                    <div className="col skill-logo mb-5">
                        <SiExpress className='icon' color='#333333' />
                        <p>Express Js</p>
                    </div>
                    <div className="col skill-logo mb-5">
                        <SiMongodb className='icon' color='3FA037' />
                        <p>MongoDB</p>
                    </div>
                    <div className='col skill-logo mb-5'>
                        <SiBootstrap className='icon' color="#563D7C" />
                        <p>BOOTSTRAP</p>
                    </div>
                    <div className="col skill-logo mb-5">
                        <SiPostman className='icon' color="#E0531F" />
                        <p>React Js</p>
                    </div>
                    <div className=" col skill-logo mb-5">
                        <SiGit className='icon' color="#333" />
                        <p>Git-Hub</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Skills;