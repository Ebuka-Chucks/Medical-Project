import React from "react";
import ambu1 from "../assets/AM1.png";
import covid from "../assets/Covid1.png";
import gene from "../assets/G1.png";
import gyn from "../assets/Gene1.png";
import optom from "../assets/OP1.png";
import paed from "../assets/PA1.png";
import "../styles/services.css"
const Services = () => {
  return (
    <div className="bb">
      <div className="services">
        <section className="S1">
          <center className="A">
            <h3>Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac tellus sed proin
              ullamcorper arcu ut eget augue. Fermentum eget id massa morbi
              risus.
            </p>
          </center>
        </section>
        <div className="S1d">
          <center className="A">
            <h3>Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac tellus sed proin
              ullamcorper arcu ut eget augue. Fermentum eget id massa morbi
              risus.
            </p>
          </center>
        </div>
        <section className="S2 d-flex justify-content-evenly  align-items-center my-5">
          <div className="S2-text" id="k1">
            <hr className="hori" />
            <h3>COVID-19 Vaccine Administration</h3>
            <div className="sho">
              <p>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut
                netus dictum tellus nunc ullamcorper quisque. Lectus in nisl
                viverra nisl faucibus. Id pharetra nisl a amet leo non mollis.
                Phasellus lectus ut suspendisse tortor eget sit senectus.
              </p>
              
            </div>
            <div className="disap">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
              utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget
              sit senectus.
            </div>
            <button className="btn rounded-4">See Details</button>
          </div>
          <div className="S2-img">
            <img src={covid} alt="covid" className="img-fluid" />
          </div>
        </section>

        <section className="S2 d-flex justify-content-evenly my-5">
          <div className="S2-img ms-4">
            <img src={ambu1} alt="ambulance" className="img-fluid" />
          </div>
          <div className="S2-text" id="k1">
            <hr className="hori" />
            <h3>Ambulance</h3>
            <div className="sho">
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut
                netus dictum tellus nunc ullamcorper quisque. Lectus in nisl
                viverra nisl faucibus. Id pharetra nisl a amet leo non mollis.
                Phasellus lectus ut suspendisse tortor eget sit senectus.
              </p>{" "}
            </div>
            <div className="disap">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
              utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget
              sit senectus.
            </div>
            <button className="btn rounded-4">See Details</button>
          </div>
        </section>

        <section className="S4 d-flex justify-content-evenly my-5">
          <div className="A4 S2-text" id="k1">
            <hr className="hori" />
            <h3>Gynecology</h3>
            <div className="sho">
              <p>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut
                netus dictum tellus nunc ullamcorper quisque. Lectus in nisl
                viverra nisl faucibus. Id pharetra nisl a amet leo non mollis.
                Phasellus lectus ut suspendisse tortor eget sit senectus.
              </p>{" "}
            </div>
            <div className="disap">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
              utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget
              sit senectus.
            </div>
            <button className="btn rounded-4">See Details</button>
          </div>
          <div className="S2-img">
            <img src={gyn} alt="Gynecology" className="img-fluid" />
          </div>
        </section>

        <section className="S5 d-flex justify-content-evenly my-5">
          <div className="A5 S2-img ms-4">
            <img src={paed} alt="Paediatrics" className="img-fluid" />
          </div>
          <div className="B5 S2-text" id="k1">
            <hr className="hori" />
            <h3>Paediatrics</h3>
            <div className="sho">
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut
                netus dictum tellus nunc ullamcorper quisque. Lectus in nisl
                viverra nisl faucibus. Id pharetra nisl a amet leo non mollis.
                Phasellus lectus ut suspendisse tortor eget sit senectus.
              </p>{" "}
            </div>
            <div className="disap">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
              utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget
              sit senectus.
            </div>
            <button className="btn rounded-4">See Details</button>
          </div>
        </section>

        <section className="S6 d-flex justify-content-evenly my-5">
          <div className="A6 S2-text" id="k1">
            <hr className="hori" />
            <h3>Optometry</h3>
            <div className="sho">
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut
                netus dictum tellus nunc ullamcorper quisque. Lectus in nisl
                viverra nisl faucibus. Id pharetra nisl a amet leo non mollis.
                Phasellus lectus ut suspendisse tortor eget sit senectus.
              </p>{" "}
            </div>
            <div className="disap">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
              utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget
              sit senectus.
            </div>
            <button className="btn rounded-4">See Details</button>
          </div>
          <div className="B6 S2-img">
            <img src={optom} alt="Optometry" className="img-fluid" />
          </div>
        </section>

        <section className="S7 d-flex justify-content-evenly my-5">
          <div className="A7 S2-img ms-4">
            <img src={gene} alt="General Physician" className="img-fluid" />
          </div>
          <div className="B7 S2-text" id="k1">
            <hr className="hori" />
            <h3>General Physician</h3>
            <div className="sho">
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut
                netus dictum tellus nunc ullamcorper quisque. Lectus in nisl
                viverra nisl faucibus. Id pharetra nisl a amet leo non mollis.
                Phasellus lectus ut suspendisse tortor eget sit senectus.
              </p>{" "}
            </div>
            <div className="disap">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
              utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget
              sit senectus.
            </div>
            <button className="btn rounded-4">See Details</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
