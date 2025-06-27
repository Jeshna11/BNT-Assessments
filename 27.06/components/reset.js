import React, { useState } from 'react';

function ResetCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count >= 10) {
      setCount(0); // Reset to 0 after 10th click
    } else {
      setCount(count + 1); // Increment by 1
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increase Count</button>
    </div>
  );
}

export default ResetCounter;
