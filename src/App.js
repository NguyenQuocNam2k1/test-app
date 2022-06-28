import './App.css';

function App() {
  const test = () => {
    FB.login(function (response) {
      if (response.status === "connected") {
        // Logged into your webpage and Facebook.
      } else {
        // The person is not logged into your webpage or we are unable to tell.
      }
    });
  }

  return (
    <div className="App">
      
      
    </div>
  );
}

export default App;
