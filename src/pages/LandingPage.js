import Header from "parts/Header";
import React, { Component } from "react";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero} />
        <MostPicked data={landingPage.mostPicked} />
      </>
    );
  }
}
