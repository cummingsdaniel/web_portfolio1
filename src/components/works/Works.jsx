import "./works.scss"

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assest/mobile.png" alt=""/>
                                </div>                             
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <span>Projects</span>
                                </div>
                        </div>
                        
                        <div className="right">
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61582b9e-d9f4-48ab-a4a5-8d5d9619ca55/defpqcz-85d12796-6ae9-4975-bda0-cb74b18ebdad.jpg/v1/fill/w_738,h_1083,q_70,strp/samle_email_promo_2_by_danstonmurphy_defpqcz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxNTgyYjllLWQ5ZjQtNDhhYi1hNGE1LThkNWQ5NjE5Y2E1NVwvZGVmcHFjei04NWQxMjc5Ni02YWU5LTQ5NzUtYmRhMC1jYjc0YjE4ZWJkYWQuanBnIiwiaGVpZ2h0IjoiPD0xODc3Iiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNjE1ODJiOWUtZDlmNC00OGFiLWE0YTUtOGQ1ZDk2MTljYTU1XC9kYW5zdG9ubXVycGh5LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.hHsIMQlaA03mxvmsiLudMya2IVlL1PAc9EHZSBGEdEQ" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="assest/arrow2.png" 
                 className="arrow left"
                 alt=""
            />
            <img src="assest/arrow2.png"
                 className="arrow right"
                 alt=""
            />
        </div>
    );
}
