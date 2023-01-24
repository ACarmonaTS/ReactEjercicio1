import { useState } from "react";

function UnsplashImage(props) {
  const [animation, setAnimation] = useState(false);
  
  return (
    <img
    className={animation ? "img-hover": "main div div"}
      src={props.src}
      alt={props.alt}
      onMouseLeave={() => setAnimation(false)}
      onMouseEnter={() => setAnimation(true)}
    />
  );
}

export default UnsplashImage;
