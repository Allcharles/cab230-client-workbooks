import { useState } from "react";

export default function LikeCounter() {
  const maxSuperLikes = 2;
  const [superCount, setSuperCount] = useState(0);
  const [count, setCount] = useState(0);

  const superLike = () => {
    setSuperCount((oldCount) => ++oldCount);
    setCount((oldCount) => (oldCount += 10));
  };

  const increment = () => {
    setCount((oldCount) => ++oldCount);
  };

  const decrement = () => {
    setCount((oldCount) => --oldCount);
  };

  return (
    <div>
      <p>Like Count: {count}</p>
      <button onClick={superLike} disabled={superCount >= maxSuperLikes}>
        SuperLink
      </button>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
    </div>
  );
}
