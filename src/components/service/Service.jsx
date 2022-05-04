import React from "react";
import "./service.css";
import glasess2 from "../../assets/img/glasses.png";
import heart from "../../assets/img/heartemoji.png";
import humble from "../../assets/img/humble.png";
import Cart from "../cart/Cart";
function Service() {
  return (
    <section className="service">
      {/* Left side */}
      <div className="s-left">
        <h1>
          <span>My Awesome</span>
          <span>services</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus repudiandae quisquam nemo <br /> assumenda voluptatem
          fugiat. Ducimus animi nam nisi ullam.
        </p>
        <button className="button s-button">Download CV</button>
      </div>
      {/* Right side */}
      <div className="s-right">
        <div style={{ left: "14rem" }}>
          <Cart
            img={heart}
            title={"Design"}
            desc={"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
          />
        </div>
        <div style={{ top: "60%", left: "-7rem" }}>
          <Cart
            img={glasess2}
            title={"Web developer"}
            desc={"HTML5, CSS5, JS, React, Redux"}
          />
        </div>
        <div style={{ top: "43%", right: "20rem" }}>
          <Cart
            img={humble}
            title={"UI/UX"}
            desc={" Lorem ipsum dolor sit amet, consectetur ."}
          />
        </div>
      </div>
    </section>
  );
}

export default Service;
