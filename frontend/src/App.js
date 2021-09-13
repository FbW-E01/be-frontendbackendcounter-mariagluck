function App() {

  function handleGetNumber() {
    fetch('http://localhost:3077')
        .then(result => result.text())
        .then(text => console.log(text))
        .catch(error => console.log(error));
  }

  function handlePostIncrease() {
    const url = 'http://localhost:3077';
    const init = { method: "POST"};
      fetch(url, init)
      .then(result => result.text())
      .then(text => console.log(text))
      .catch(error => console.log(error));   
  }

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleGetNumber}>Get number</button>
      <button onClick={handlePostIncrease}>Post + </button>
      </header>
    </div>
  );
}
//  console.log("hello");
export default App;
