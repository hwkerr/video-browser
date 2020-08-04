import "./VideoItem.css";
import React from "react";

function VideoItem({ video, onVideoSelect }) {
  return (
    <div className="item video-item" onClick={e => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
