import { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyAQq4ddc33VJkJjV21wm4u-qvgGwEkdHmo';

const useFetch = (uri) => {
  const [videoList, setVideoList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fullUri = `${uri}&key=${API_KEY}`;
      try {
        const response = await fetch(fullUri);
        const youtubeSearch = await response.json();
        if (youtubeSearch) {
          setVideoList(youtubeSearch.items);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const pauseForFetch = setTimeout(() => {
      fetchData();
    }, 500);
    return () => {
      clearTimeout(pauseForFetch);
    };
  }, [uri]);

  return { videoList };
};

export default useFetch;
