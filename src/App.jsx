import "./App.css";
import ImageGrid from "./components/ImageGrid";

//declare apiKey to take the value from GIPHY_API_KEY from the .env
// const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-10">
      <img src="Seinfeld_logo.svg" alt="Seinfeld Logo" className="w-1/4 p-4" />
      <ImageGrid apiKey={apiKey}/>
    </div>
  );
}

export default App;
