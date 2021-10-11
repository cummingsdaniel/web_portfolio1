import "./intro.scss"
import { init } from 'ityped'   /*ityped is an animation that you can set to ojects*/
import { useEffect, useRef } from "react" /**/

export default function Intro() {
    /*instead of adding 'extends Component'in the default function
    and using the componentDidMount(). I used the 'useEffect' lambda with an
    empty array for its dependency. */

     /*Instead textReff = document.querySelector() I instead used the 'useRef' hook. */
    const textReff = useRef();
    useEffect(()=>{
        init(textReff.current,{
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ["Developer", "Designer", "Database Administrator"],
        });
        // console.log(textReff)
    },[])

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
                    {/*the textReff const is initialized to the ref attribute*/}
                    <h3>Freelance <span ref={textReff}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assest/arrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
