import React from "react";
import { HeroImg, HeroFrame, IcCities, IcTraveler, IcTreasure } from "assets";
import Button from "elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: (props.refMostPicked.current.offsetTop = 30),
      behavior: "smooth",
    });
  }
  return (
    <section className="container pt-3">
      <div className="row align-items-center">
        <div className="col-lg-6 pl-4">
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work,
            <br /> Start Next Vacations
          </h1>
          <p
            className="mb-3 font-weight-light text-gray-500"
            style={{ lineHeight: "170%" }}
          >
            Exercitation cupidatat velit laboris sint eu laborum exercitation
            voluptate dolor aliquip proident velit eiusmod.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me
          </Button>
          <div className="row mt-5 mb-5">
            <div className="col-6 col-lg-4">
              <img
                width="36"
                height="36"
                src={IcTraveler}
                alt={`${props.data.travelers} Traveler`}
              />
              <h6 className="mt-3">
                {props.data.travelers}{" "}
                <span className="text-gray-500 font-wight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-6 col-lg-4">
              <img
                width="36"
                height="36"
                src={IcTreasure}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {props.data.treasures}{" "}
                <span className="text-gray-500 font-wight-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-6 col-lg-4 mt-4 mt-lg-0">
              <img
                width="36"
                height="36"
                src={IcCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {props.data.cities}{" "}
                <span className="text-gray-500 font-wight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-5 pl-5 pt-3 d-none d-lg-block">
          <div style={{ height: 400 }}>
            <img
              src={HeroImg}
              alt="Room"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={HeroFrame}
              alt="Room Frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
