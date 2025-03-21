import React from "react";
import Header from "./header";
import CardList from "./cardList";

const Events = () => {
  return (
    <div className="container">
      <Header />

      <h1 className=" m-4 fs-2 text-center">
        We Helped Communities Connect & Flourish
      </h1>
      <h1 className="text-success text-center">Upcoming Events</h1>

      <CardList />
    </div>
  );
};

export default Events;
