import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMovies } from "../store/movieContext";
import { AiFillLike, AiFillDislike,  } from "react-icons/ai";
import { HiTrash } from "react-icons/hi";
interface Props {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  likes: number;
  dislikes: number;
}
const Card: React.FC<Props> = ({
  id,
  title,
  category,
  thumbnail,
  likes,
  dislikes,
}) => {
  const [likeState, setLikeState] = useState<Boolean>(false);
  const [likesState, setLikesState] = useState<number>(likes);
  const [dislikesState, setDislikesState] = useState<number>(dislikes);
  const { DeleteMovie } = useMovies();
  //Like function
  const LikeHandler = () => {
    setLikesState(likesState + 1);
    setDislikesState(dislikesState > 0 ? dislikesState - 1 : 0);
  };
  //DisLike function
  const DislikeHandler = () => {
    setLikesState(Number(likesState > 0 ? likesState - 1 : ""));
    setDislikesState(dislikesState + 1);
  };

  useEffect(() => {
    likeState ? LikeHandler() : DislikeHandler();
  }, [likeState]);
  return (
    <div className="card rounded shadow-lg border border-black p-4">
      <Image
        className="image-film w-full justify-center items-center"
        src={`/images/${thumbnail}`}
        alt="Sunset in the mountains"
        height={400}
        width={400}
        objectFit="contain"
      />
      <div className="flex px-2 justify-between items-center space-x-2">
        <div className="flex flex-col">
          <div className="title font-bold text-xl mb-2">{title}</div>
          <div className="category text-sm mb-2">{category}</div>
        </div>
        <div className="likes_bloc">
          <button
            className="border border-black p-2 rounded-md flex items-center space-x-3 h-8"
            onClick={() => setLikeState(!likeState)}
          >
            <span className={likeState ? "text-blue-200" : ""}>
              <span className="flex"><AiFillLike/> ({likesState})</span>
            </span>{" "}
            <span className={!likeState ? "text-blue-200" : ""}>
              <span className="flex"><AiFillDislike/> ({dislikesState})</span>
            </span>
          </button>
        </div>
        <div className="trash_card">
          <HiTrash
            className="w-7 h-7 bg-red-400 hover:bg-red-500 text-white rounded-md cursor-pointer ring-2"
            onClick={() => DeleteMovie(Number(id))}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
