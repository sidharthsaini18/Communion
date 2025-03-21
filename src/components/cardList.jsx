import React, { useState } from "react";
import Card from "./card";
import carddata from "./mockdata.json";

const CardList = () => {
  const [filter, setFilter] = useState("All");

  // Function to filter events based on the selected date range
  const filterCards = (range) => {
    const today = new Date();
    const startOfWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - today.getDay()
    );
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const startOfYear = new Date(today.getFullYear(), 0, 1);

    switch (range) {
      case "Today":
        return carddata.filter((card) => {
          const eventDate = new Date(card.date);
          return (
            eventDate.getDate() === today.getDate() &&
            eventDate.getMonth() === today.getMonth() &&
            eventDate.getFullYear() === today.getFullYear()
          );
        });
      case "This Week":
        return carddata.filter((card) => new Date(card.date) >= startOfWeek);
      case "This Month":
        return carddata.filter((card) => new Date(card.date) >= startOfMonth);
      case "This Year":
        return carddata.filter((card) => new Date(card.date) >= startOfYear);
      default:
        return carddata; // Show all events
    }
  };

  const filteredCards = filterCards(filter);

  return (
    <div className="container mt-4">
      {/* Row of Filter Buttons */}
      <div
        className="btn-group mb-3 d-flex align-items-center"
        role="group"
        aria-label="Filter by Date"
      >
        {["All", "Today", "This Week", "This Month", "This Year"].map(
          (label) => (
            <button
              key={label}
              className={`btn btn-outline-primary ${
                filter === label ? "active" : ""
              }`}
              onClick={() => setFilter(label)}
            >
              {label}
            </button>
          )
        )}
      </div>

      {/* Render Cards */}
      <div className="row">
        {filteredCards.map((card) => (
          <div key={card.id} className="col-md-4">
            <Card
              id={card.id}
              name={card.name}
              img={card.img}
              date={card.date}
              location={card.location}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
