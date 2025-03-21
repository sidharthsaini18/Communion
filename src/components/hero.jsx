import React from "react";

const Hero = () => {
  const handleClick = () => {
    window.location.href = "/events";
  };
  return (
    <div className="container">
      <h1
        className="text-center fw-bolder mt-4"
        style={{ fontSize: "4rem", fontFamily: "Arial" }}
      >
        Connect Communities
      </h1>
      <p className="text-center text-muted" style={{ fontSize: "1.5rem" }}>
        Bridging gaps between faiths with tech and a dash of fun!
      </p>

      <div className="mainsec d-flex gap-2 align-items-center bg-secondary text-white m-2">
        <img
          className="w-50"
          src="src\assets\event-1.e37c47c6656e8a5c0043.avif"
        />
        <div className="d-flex flex-column  align-items-center">
          <p className="">
            Connecting individuals across diverse communities by fostering
            relationships through engaging events, meaningful dialogues, and
            shared activities. This platform serves as a bridge to nurture
            unity, inclusivity, and support, creating opportunities for
            collaboration and mutual growth. Together, we empower one another to
            build stronger, more connected societies and lasting bonds.
          </p>

          <button onClick={handleClick} className="btn btn-primary w-50">
            Explore Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
