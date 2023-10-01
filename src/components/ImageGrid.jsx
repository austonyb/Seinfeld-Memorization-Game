import ImageCard from "./ImageCard";

export default function ImageGrid({ imgs }) {
  const imageList = imgs && imgs.length > 0 ? imgs.map((item, index) => (
    <div key={item.url} className="m-2">
      <ImageCard src={item.url} alt={item.name} />
    </div>
  )) : null; // Check if imgs is not an empty array before mapping

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {imageList}
      </div>
    </div>
  );
}
