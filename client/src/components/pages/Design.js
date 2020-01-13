import React, { useState, useEffect } from "react";
import './Design.css'
//import test from './oneAndAHalf_physical_1.jpeg'

const Design = () => {
  const [designs, setDesigns] = useState([]);
  

  useEffect(() => {
    fetch("/api/designs")
      .then(res => res.json())
      .then(fetched => setDesigns(fetched));
    console.log("Design mounted");
  }, []);

  return (
    <div>
      <h1>Design</h1>
      <p>Designs including albums, posters, etc. will be listed here.</p>
      <p>
        {designs.map(design => (
          <li key={design.id}>
            {design.figureName}: {design.projectName}
          </li>
        ))}
      </p>
      <p>
        <img        
          src="/img/oneAndAHalf_physical_1.jpeg"
          className="test"
          alt="test failed"
        />
      </p>
    </div>
  );
};
export default Design;
