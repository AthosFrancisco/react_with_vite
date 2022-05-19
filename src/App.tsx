const App = () => {

  const handleClickButton = () => {
    alert('botão clicado');
  }

  return (
    <div>
      <button onClick={handleClickButton}>Clique aqui</button>
    </div>
  );
}

export default App;