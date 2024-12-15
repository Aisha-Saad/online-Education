import React from "react";
import Back from "../commen/back/Back";
import PricingCard from "./PricingCard";
import "./pricing.css"
import Faq from "./Faq";

const Pricing = () => {
  return (
    <>
     <Back title="choose The Right Plan"/>
    
      <section className="peice padding">
        <div className="container grid">
        <PricingCard/>
        </div>
        
      </section>
      <Faq/>
    </>
  );
};

export default Pricing;
