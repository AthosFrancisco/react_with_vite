import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState('');

  const handleName = (event:React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
    
  return (
    <div>
      Nome:
      <input type="text" value={name} onChange={handleName} />
      <hr />
      Nome digitado: {name}
    </div>
  );
}

export default App;