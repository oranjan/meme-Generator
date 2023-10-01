import { useEffect, useState } from "react";

const Meme = () => {
  const [memeArray, setMemeArray] = useState();
  const [memeInfo, setMemeInfo] = useState({
    topText: "You can edit ",
    bottomText: "This text",
    imageUrl: "https://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    // using callack as effect fxn cause geData returns promise but we want effect fxn to return cleanup fxn or undefined/nothing this is a workaround
    const getData = async () => {
      const memeData = await fetch("https://api.imgflip.com/get_memes");
      const json = await memeData.json();
      setMemeArray(json.data.memes);
    };
    getData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMemeInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getMemeImage = () => {
    const randomNum = Math.floor(Math.random() * memeArray.length);
    const imgUrl = memeArray[randomNum].url;
    setMemeInfo((prev) => ({
      ...prev,
      imageUrl: imgUrl,
    }));
  };

  return (
    <>
      <form>
        <input
          onChange={handleChange}
          value={memeInfo.topText}
          className="toptext"
          type="text"
          name="topText"
          placeholder="Top text "
        />
        <input
          onChange={handleChange}
          value={memeInfo.bottomText}
          className="bottomtext"
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
        />
      </form>

      <button onClick={getMemeImage}> Get a new meme image 📸 </button>

      <div className="meme-image">
        <h1 className="top">{memeInfo.topText}</h1>
        <img
          className="meme-image-img"
          src={memeInfo.imageUrl}
          alt="random meme"
        />
        <h1 className="bottom">{memeInfo.bottomText}</h1>
      </div>
    </>
  );
};
export default Meme;
