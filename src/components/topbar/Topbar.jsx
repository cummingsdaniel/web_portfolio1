import "./topbar.scss"
import {Refresh, Person, Mail} from "@material-ui/icons"
export default function Topbar({menuO, setMenuO}) {
    return (
        <div className={"topbar " + (menuO && "active")}> {/*if menuO is true then active is part of the name*/}
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">  {/* href=#intro means page will snap to info section on click */}
                        dan.
                    </a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>(613)668-0613</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>cummingsdan87@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuO(!menuO)}> {/*on click the menuO will set to what menuO is not currently*/}
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
