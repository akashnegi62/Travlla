import React from "react";
import AboutHero from "@/components/About/AboutHero";
import AboutRecommend from "@/components/About/AboutRecommend";
import AboutDestination from "@/components/About/AboutDestination";
import AboutService from "@/components/About/AboutService";
function About() {
  return (
    <>
      <AboutHero title="Company Overview" />
      <AboutRecommend />
      <AboutDestination />
      <AboutService />
    </>
  );
}

export default About;
