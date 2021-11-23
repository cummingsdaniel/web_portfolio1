import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assest/globe.png",
      title: "Software Experience",
      desc:
        "JavaScript, css, html, Github, Adobe Creative Suite, Java, eclipse, MongoDB, Android Studio...",
      img:
        "./assest/allsoftware.png",
    },
    {
      id: "2",
      icon: "./assest/writing.png",
      title: "Branding",
      desc:
        "Professional Branding Designs for letterheads, business cards, email promotional banners, icons and labels",
      img: "./assest/branding_sample.jpg",
    },
    {
      id: "3",
      icon: "./assest/brush.png",
      title: "Graphic Design",
      desc:
        "Over 12 years experence with Adobe Creative Suite. Including, Photoshop and Illustrator",
      img:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61582b9e-d9f4-48ab-a4a5-8d5d9619ca55/det6nyf-e5df42ee-d4cf-4f19-8287-1ae418000961.jpg/v1/fill/w_1280,h_1981,q_75,strp/spaceposter_by_danstonmurphy_det6nyf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxNTgyYjllLWQ5ZjQtNDhhYi1hNGE1LThkNWQ5NjE5Y2E1NVwvZGV0Nm55Zi1lNWRmNDJlZS1kNGNmLTRmMTktODI4Ny0xYWU0MTgwMDA5NjEuanBnIiwiaGVpZ2h0IjoiPD0xOTgxIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNjE1ODJiOWUtZDlmNC00OGFiLWE0YTUtOGQ1ZDk2MTljYTU1XC9kYW5zdG9ubXVycGh5LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.CoUCt7EKqh6lisktVzm6v6yLYooIIhHmCdT6nCzaLpQ"
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assest/arrow2.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assest/arrow2.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}