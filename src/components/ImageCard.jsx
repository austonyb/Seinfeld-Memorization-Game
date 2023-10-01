export default function ImageCard({ src, alt }) {
  return (
    <>
      <div className="outline outline-8 outline-yellow-500 rounded-lg bg-yellow-500 items-center">
        <div className="w-32 h-32 rounded-lg overflow-hidden m-1">
          <img
            src={src}
            alt={alt}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="font-young-serif">{alt}</h1>
      </div>
    </>
  );
}
