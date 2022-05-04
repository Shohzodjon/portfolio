import React from "react";
import "./intro.css";
import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";
import instagram from "../../assets/img/instagram.png";
import vector1 from "../../assets/img/Vector1.png";
import vector2 from "../../assets/img/Vector2.png";
import boy from "../../assets/img/boy.png";
import thumbup from "../../assets/img/thumbup.png";
import crown from "../../assets/img/crown.png";
import glassesimoji from "../../assets/img/glassesimoji.png";
import Float from "../floating/Float";

function Intro() {
  return (
    <section className="intro">
      <div className="i-left">
        <div className="i-name">
          <span className="i-span1">Hi ! I am</span>
          <span className="i-span2">Andrew Thomas</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            doloremque voluptatum fuga doloribus delectus quaerat ipsam
            consequatur consequuntur corrupti error.
          </p>
        </div>

        <button className="button i-button">Hire me</button>
        <ul className="i-icons">
          <li>
            <img src={github} alt="github" />
          </li>
          <li>
            <img src={linkedin} alt="github" />
          </li>
          <li>
            <img src={instagram} alt="github" />
          </li>
        </ul>
      </div>
      <div className="i-right">
        <img src={vector1} alt="vector" />
        <img src={vector2} alt="vector" />
        <img src={boy} alt="boy" />
        <img src={glassesimoji} alt="imogi" />
        <div style={{ top: "-4%", left: "60%" }}>
          <Float img={crown} text="Web" text2="Developer" />
        </div>
        <div style={{ bottom: "10%" }}>
          <Float img={thumbup} text="Best Design" text2="Award" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      </div>
    </section>
  );
}

export default Intro;
