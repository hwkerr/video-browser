import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos }) {
  return (
    <div className="ui relaxed divided list">
      {videos.map(video =>
        <VideoItem key={video.etag} video={video}/>)}
    </div>
  );
}

export default VideoList;
