import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);



      setProgress(progress+33.33);
 
  
   

  return (
    <div>
      <div
        style={{
          width: `${progress}%`,
          height: '20px',
          backgroundColor: 'lightblue',
          transition: 'width 0.5s ease',
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
