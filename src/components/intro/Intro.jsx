import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assest/selfpic.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Daniel Cummings</h1>
                    <h3>Freelance <span>Software Developer | Web Developer | Designer</span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assest/arrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
