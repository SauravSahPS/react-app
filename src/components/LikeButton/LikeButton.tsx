import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const LikeButton = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (!status)
    return (
      <AiOutlineHeart color="red" size={40} onClick={toggle}></AiOutlineHeart>
    );

  return <AiFillHeart color="red" size={40} onClick={toggle}></AiFillHeart>;
};

export default LikeButton;
