import React from "react";
import upwork from "../../assets/img/Upwork.png";
import fiverr from "../../assets/img/fiverr.png";
import amazon from "../../assets/img/amazon.png";
import shopify from "../../assets/img/Shopify.png";
import facebook from "../../assets/img/Facebook.png";
import "./work.css";
function Work() {
  return (
    <section className="work">
      <div className="s-left">
        <h1>
          <span>All works for These</span>
          <span>Brends & Clients</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus repudiandae quisquam nemo <br /> assumenda voluptatem
          fugiat. Ducimus animi nam nisi ullam.
          <br />
          Ducimus animi nam nisi ullam.
          <br />
          Ducimus animi nam nisi ullam. fugiat. Ducimus animi nam nisi ullam.
        </p>
        <button className="button s-button">Hire me</button>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={upwork} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={fiverr} alt="fiverr" />
          </div>
          <div className="w-secCircle">
            <img src={amazon} alt="amazon" />
          </div>
          <div className="w-secCircle">
            <img src={shopify} alt="shopify" />
          </div>
          <div className="w-secCircle">
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </section>
  );
}

export default Work;
