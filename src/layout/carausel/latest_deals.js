import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "../cards/cards";
import Image1 from "../../assets/ExpSlider6.jpg";
import Image2 from "../../assets/advance_seat_reservation.jpg";
import Image3 from "../../assets/nb_free_seat.jpg";
import Image4 from "../../assets/optional_services_bid_now.jpg"

export default function Deals() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="bg-gray-100 p-3 ">
      <h1 className="text-3xl font-bold flex justify-center m-4 text-sky-600">Latest Deals</h1>
      <div style={{ position: "relative",padding:"50px" }}>
        <Carousel responsive={responsive}>
          <div className="flex justify-center"><Cards src={Image1} title={"Get App"}/></div>
          <div><Cards src={Image2} title={"Travel Insurance"}/></div>
          <div><Cards src={Image3} title={"Free Seats"}/></div>
          <div><Cards src={Image4} title={"Comfort"}/></div>
          <div><Cards src={Image1} title={"Inflight Wifi"}/></div>
          <div><Cards src={Image2}  title={"Free meals"}/></div>
          <div><Cards src={Image3} title={"Luxury"}/></div>
        </Carousel>
      </div>
    </div>
  );
}
