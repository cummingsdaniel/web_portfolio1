import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assest/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61582b9e-d9f4-48ab-a4a5-8d5d9619ca55/defpqcz-85d12796-6ae9-4975-bda0-cb74b18ebdad.jpg/v1/fill/w_738,h_1083,q_70,strp/samle_email_promo_2_by_danstonmurphy_defpqcz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxNTgyYjllLWQ5ZjQtNDhhYi1hNGE1LThkNWQ5NjE5Y2E1NVwvZGVmcHFjei04NWQxMjc5Ni02YWU5LTQ5NzUtYmRhMC1jYjc0YjE4ZWJkYWQuanBnIiwiaGVpZ2h0IjoiPD0xODc3Iiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNjE1ODJiOWUtZDlmNC00OGFiLWE0YTUtOGQ1ZDk2MTljYTU1XC9kYW5zdG9ubXVycGh5LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.hHsIMQlaA03mxvmsiLudMya2IVlL1PAc9EHZSBGEdEQ",
    },
    {
      id: "2",
      icon: "./assest/globe.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61582b9e-d9f4-48ab-a4a5-8d5d9619ca55/defpots-b40a6b55-8ffb-4fca-8399-85a3eaf54e14.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxNTgyYjllLWQ5ZjQtNDhhYi1hNGE1LThkNWQ5NjE5Y2E1NVwvZGVmcG90cy1iNDBhNmI1NS04ZmZiLTRmY2EtODM5OS04NWEzZWFmNTRlMTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ts0tl0FPrvqX-Zx8n5Lu8hxvU3hw1Z-g3IeUbKyxk_U",
    },
    {
      id: "3",
      icon: "./assest/writing.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61582b9e-d9f4-48ab-a4a5-8d5d9619ca55/de26cfw-84ed2c30-cac7-4161-b706-a11fa84b55c5.jpg/v1/fill/w_1280,h_1979,q_75,strp/poster_by_danstonmurphy_de26cfw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxNTgyYjllLWQ5ZjQtNDhhYi1hNGE1LThkNWQ5NjE5Y2E1NVwvZGUyNmNmdy04NGVkMmMzMC1jYWM3LTQxNjEtYjcwNi1hMTFmYTg0YjU1YzUuanBnIiwiaGVpZ2h0IjoiPD0xOTc5Iiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNjE1ODJiOWUtZDlmNC00OGFiLWE0YTUtOGQ1ZDk2MTljYTU1XC9kYW5zdG9ubXVycGh5LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.XgTqmCiZA0zZZa_yWdKG_Xra-_BzzXa07cx_ojNm8HU",
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
                  <span>Projects</span>
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