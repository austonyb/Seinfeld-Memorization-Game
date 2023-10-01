import { useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import ImageCard from "./ImageCard";

export default function ImageGrid({ apiKey }) {
  const gf = new GiphyFetch(apiKey);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await gf.gifs("tv", "seinfeld");
        setGifs(data.data);
        console.log(gifs)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const imageList = gifs.map((item, index) => (
    <div key={item.id} className="m-2">
      <ImageCard src={item.images.downsized.url} alt={`Image ${item.id}`} />
    </div>
  ));

  return (
    <>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {imageList}
        </div>
      </div>
    </>
  );
}
