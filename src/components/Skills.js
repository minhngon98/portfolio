// Create your Skills component here
import {FaPython, FaReact, FaGithub} from "react-icons/fa";
import {SiTensorflow, SiOpencv, SiNumpy, SiKeras, SiPandas} from "react-icons/si"
const Skills = () => {
    const skillsArr = [
        {
            "name": "Python",
            "icon": FaPython
        },
        {
            "name" : 'Tensorflow',
            "icon" : SiTensorflow
        },
        {
            "name" : "Keras",
            "icon" : SiKeras
        },
        {
            "name" : "OpenCV",
            "icon" : SiOpencv
        },
        {
            "name" : "Numpy",
            "icon" : SiNumpy
        },
        {
            "name" : "Pandas",
            "icon" : SiPandas
        },           
        {
            "name" : "Git",
            "icon" : FaGithub
        },

    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <i key={index} className='skill-cards'>
                                <Icon className='skill-icon'/>
                                <p
                                className="skill"
                                >
                                    {skill.name}
                                </p>
                            </i>
                        )
                    })                    
                }
            </div>
        </div>
    )
}

export default Skills;