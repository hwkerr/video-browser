import { useState, useEffect } from "react";
import { XmlEntities as Entities } from "html-entities";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    const entities = new Entities();
    const items = response.data.items.map(item => {
      item.snippet.title = entities.decode(item.snippet.title);
      return item;
    });
    setVideos(items);
  };

  return { videos, search };
};

export default useVideos;
