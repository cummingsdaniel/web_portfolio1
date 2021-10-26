import "./menu.scss"

export default function Menu({menuO, setMenuO}) {
    return (
        <div className={"menu " + (menuO && "active")}>
            <ul>
                <li onClick={()=>setMenuO(false)}> {/*closes menu after clicking on one of the options */}
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuO(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuO(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuO(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
