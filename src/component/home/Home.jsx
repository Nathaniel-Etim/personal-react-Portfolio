import "./home.css";
import img1 from "../props/Chris.jpg";
import { BsMouse } from "react-icons/bs";
import Button from "../button/Button";

function Home() {
  return (
    <>
      <div id="home" className="container home-container">
        <div className="logo">
          {/* <div className="main-img">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div> */}

          <img src={img1} alt="" />
        </div>

        <a href="#fotter" className="scroll-down">
          <hr />
          <h5>Scroll down </h5>
          <BsMouse className="scroll" />
          <hr />
        </a>
        <h2>
          <span> About Me </span> <br />
          <p>
            i am a hard-working and enthusiastic undergraduate in business
            management, equiped with experience in research and field work,
            customer care service, Marketing / Digital marketing and also
            administrative duties, i always strive to achieve the highest
            standard passible at any given task and in any situation. <br /> i
            employ excellent leadership skills and multi-tasking strength.
          </p>
        </h2>
        <Button />
      </div>
    </>
  );
}

// const toggle = document.querySelector(".main-img");
// toggle.addEventListener("click", () => {
//   toggle.classList.toggle("active");
// });

export default Home;
