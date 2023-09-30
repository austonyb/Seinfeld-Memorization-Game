import "./App.css";
import ImageGrid from "./components/ImageGrid";

//declare apiKey to take the value from GIPHY_API_KEY from the .env
const apiKey = import.meta.env.VITE_GIPHY_API_KEY

function App() {
  return (
    <div className="">
      <ImageGrid apiKey={apiKey} />
    </div>
  );
}

export default App;
