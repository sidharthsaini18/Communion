import React from "react";

const Card = ({ name, location, id, img, date }) => {
  return (
    <div
      className="card   m-2 col   border shadow  d-flex  align-items-center"
      style={{ height: "30rem", width: "100%" }}
    >
      <img
        src="src\assets\1.avif"
        className="w-75 mt-2 mb-2"
        style={{ height: "15rem" }}
      />
      <h2 className="text-center">{name}</h2>
      <p className="text-center">{location}</p>
      <p className="text-center">{date}</p>
    </div>
  );
};

export default Card;
