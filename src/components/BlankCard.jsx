export default function BlankCard() {
    return (
      <>
        <div className="outline outline-8 outline-yellow-500 rounded-lg bg-yellow-500 items-center">
          <div className="w-32 h-32 rounded-lg overflow-hidden m-1">
            <img
              src="/question.png"
              alt="Blank Card"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-young-serif">Click to Guess!</h1>
        </div>
      </>
    );
  }
  