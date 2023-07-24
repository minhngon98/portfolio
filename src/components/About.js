// Create your About component here
import IMG from '../assets/avatar2.jpg';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">Xin chào, tôi tên là Đặng Minh Ngôn. Tôi hiện đang là một Data Scientist. Tôi đã từng làm việc tại công ti Samsung Electronics HCMC 
                CE Complex với vai trò là Computer Vision Engineering và tại công ti VeXeRe với vai trò là Full Stack Developer.</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img className="about-img" src={IMG} alt="avatar2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;