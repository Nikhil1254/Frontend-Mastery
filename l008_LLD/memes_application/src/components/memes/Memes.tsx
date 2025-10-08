import { memo, useCallback, useEffect, useState } from "react";
import Card from "../card/Card";
import "./memes.css";
import Loader from "../loading/Loader";

const Memes = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMemes = useCallback(async () => {
    try {
      setLoading(true);
      const { memes: newMemes } = await fetch(
        "https://meme-api.com/gimme/30"
      ).then((res) => res.json());
      setLoading(false);
      setMemes((memes) => [...memes, ...newMemes]);
    } catch (err) {}
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // window.innerHeight -> bisible vieport height
      // window.scrollY -> how much we can scorll in Y axis -> nothing but page height not in viewport
      // document.body.scrollHeight -> complete height of dcoument -> visible(window.innerHeight) + notvisible (window.scrollY)
      if (
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 100 &&  
        !loading
      ) {
        fetchMemes();
      }
    };

    window.addEventListener("scroll", handleScroll);

    fetchMemes();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="memes-container">
      {memes.map((meme) => (
        <Card title={meme.title} url={meme.url} />
      ))}

      {loading && <Loader />}
    </div>
  );
};

export default memo(Memes);
