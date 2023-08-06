import React from "react";

function Header() {
  function show() {
    return {};
  }
  return (
    <div>
      <div id="toppest">
        <div className="Head">
          <h2>
            INFIG
            <span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvRYoIWQ31v5M2Xa__qKYJ_m_dmBEDJfDoPsrJCCaWFQOBGOMRyxIeIPVdnsCui2tpxU&usqp=CAU"
                width="15px"
                height="15px"
                alt="hello"
              ></img>
            </span>
            N
          </h2>
        </div>

        <div className="top top1">
          {" "}
          <h2>
            <a href="#body">Home</a>
          </h2>
        </div>
        <div className="top top2">
          {" "}
          <h2>
            {" "}
            <a href="#body">How we help</a>
          </h2>
        </div>
        <div className="top top3">
          {" "}
          <h2>
            <a href="#body">Programs</a>
          </h2>
        </div>
        <div className="top top4">
          {" "}
          <h2>
            <a href="#body">FAQs</a>
          </h2>
        </div>
        <div className="top top5">
          {" "}
          <button className="but" onClick={show}>
            <h2>Get in touch</h2>
          </button>
        </div>
      </div>
      <hr></hr>
      <div id="body">
        <div className="content1">
          <div className="content">
            <div className="elem">
              <h1 className="text">How we can help</h1>
              <p className="text">
                Condimentum vel vestibulum,facilisi euismod id ornare fermentum
                ac,Bibendum turpis faucibus faucibus lectus cursus elementum.
                Suscipit mauris viverra pellentesque nisi,diam rhoncus vitae
                purus. Sed purus sed lectus
              </p>
              <p className="text">
                <span>
                  STEP 1 <big>SELF ANALYSIS</big>
                </span>
              </p>
              <p className="text">
                <span>
                  STEP 2 <big>SELF ANALYSIS</big>
                </span>
              </p>
              <p className="text">
                <span>
                  STEP 3 <big>SELF ANALYSIS</big>
                </span>
              </p>
              <p className="text">
                <span>
                  STEP 4 <big>SELF ANALYSIS</big>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="content1">
          <div className="login">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51Gph%2BE-olL.png"
              width="200px"
              height="200px"
              alt="hello1"
            ></img>
            <form>
              <label>
                <p style={{ color: "white" }}>Phone Number</p>
                <input type="number" placeholder="Phone Number" />
              </label>
              <label>
                <p style={{ color: "white" }}>Enter OTP</p>
                <input type="number" maxLength={6} placeholder="Enter OTP" />
              </label>
              <div>
                <button style={{ border: "none" }}>Resend OTP?</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
