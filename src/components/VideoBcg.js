import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBcg = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailerVideoList = useSelector((state) =>
    state.movies?.trailerVideo?.filter((video) => video.type == "Trailer")
  );
  const trailerVideo = trailerVideoList?.[0];
  const key = trailerVideo?.key;

  return (
    <div className="w-screen">
      <iframe 
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBcg;
