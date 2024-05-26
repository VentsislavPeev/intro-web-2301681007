import React, { useState } from 'react';

export default function SecondPage(){
  // Declare a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // The UI is described based on the state
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
