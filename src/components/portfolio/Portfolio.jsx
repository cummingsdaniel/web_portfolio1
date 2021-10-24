import { useEffect, useState } from "react" 
import PortfolioTab from "../portfolioTab/PortfolioTab";
import "./portfolio.scss"
import { featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    brandingPortfolio} from "../../data";
import { SRLWrapper,} from "simple-react-lightbox";
export default function Portfolio() {
    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([]);
    /*this is a list of the tabbar*/
    const list = [
    {
        id: "featured",
        title: "Featured",
    },
    {
        id: "web",
        title: "Web App",
    },
    {
        id: "mobile",
        title: "Mobile App",
    },
    {
        id: "design",
        title: "Design",
    },
    {
        id: "branding",
        title: "Branding",
    },

    ];

    useEffect(()=>{

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "branding":
                    setData(brandingPortfolio);
                    break;
            default:
                setData(featuredPortfolio);
                break;
        }

    },[selected])

    const options = {
        buttons: {
            showAutoplayButton: false,
            showCloseButton: true,
            showDownloadButton: false,
            showFullscreenButton: true,
            showNextButton: false,
            showPrevButton: false,
            size: '40px'
          }
      };

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>        
                <ul>
                    {list.map(item=>(
                        <PortfolioTab 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                        />
                    ))}
                </ul>
                <div className="container">
                    {data.map((d) => (
                    <div className="item">
                        <SRLWrapper options={options}>
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                        </SRLWrapper>
                    </div>
                    ))}
                </div>
        </div>
        )
}
