import { useState } from "react";
import Star from "./Star";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  console.log(rating);
  console.log(hover);
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          rating={rating}
          index={i}
          hover={hover}
          onMouseOver={() => setHover(i + 1)}
          onMouseOut={() => setHover(rating)}
          onClick={() => setRating(i + 1)}
        >
          {i}
        </Star>
      ))}
      {hover > 0 && <span>{hover}</span>}
    </>
  );
};

export default StarRating;
