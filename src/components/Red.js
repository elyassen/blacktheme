import React, { useEffect, useState } from "react";
import "./red.css";
function Red() {
  return (
    <div className="red">
      <h1 className="full-red">Full Stack Developer</h1>
      <div className="loading">
        <div className="progress"></div>
      </div>
    </div>
  );
}

export default Red;
