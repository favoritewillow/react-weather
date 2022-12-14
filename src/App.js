import Header from "./Header";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-forecast">
          <Header />

          <Forecast />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
