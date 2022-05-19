import { useState } from "react";

const App = () => {

  const [name, setName] = useState('Athos');

  const handleName = () => {
    setName('Bonieky');
  }
  
  return (
    <div>
      <p>Meu nome é {name}</p>
      <button onClick={handleName}>Clique aqui</button>
    </div>
  );
}

export default App;