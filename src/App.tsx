const App = () => {
  let name: string = 'Athos';
  let lastname: string = 'Carmo';
  let link: string = 'https://google.com';

  return (
    <div>
      Olá: {name} {lastname}
      <br />
      <a href={link}>Google</a>
    </div>
  );
}

export default App;