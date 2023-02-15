import React from "react";

const Navbar = () => {
  return (
    <div className="flex py-4 items-center w-4/5 relative left-1/2 -translate-x-1/2">
      <h1 className="text-3xl font-passion tracking-wide">SEHSAA</h1>
      <div className="flex space-x-10 absolute left-1/2 -translate-x-1/2">
        <div>Home</div>
        <div>Vision</div>
        <div>Roadmap</div>
        <div>Team</div>
      </div>
    </div>
  );
};

export default Navbar;
