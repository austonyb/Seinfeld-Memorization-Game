import { useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

export default function ImageGrid({ apiKey }) {
  const gf = new GiphyFetch(apiKey);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await gf.gifs("tv", "seinfeld");
        setGifs(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const imageList = gifs.map((item, index) => (
    <div key={item.id} className="w-32 h-32 rounded-lg overflow-hidden m-1">
      <img
        src={item.images.downsized.url}
        alt={`Image ${item.id}`}
        className="object-cover w-full h-full"
      />
    </div>
  ));

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <img
          src="Seinfeld_logo.svg"
          alt="Seinfeld Logo"
          className="w-1/4 mb-4"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {imageList}
        </div>
      </div>
    </>
  );
}
