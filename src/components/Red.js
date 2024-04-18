import React, { useEffect, useState } from "react";
import "./red.css";
function Red() {
  return (
    <div className="red">
      <p className="full-red">Loading</p>
      <div className="loading">
        <div className="progress"></div>
      </div>
    </div>
  );
}

export default Red;
