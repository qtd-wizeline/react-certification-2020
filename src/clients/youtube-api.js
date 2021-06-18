const baseAddress = 'https://youtube.googleapis.com/youtube/v3';

function youtubeApiSearch(searchString) {
  // build query param
  const queryParam = new URLSearchParams();
  queryParam.append('part', 'snippet');
  queryParam.append('maxResults', 25);
  queryParam.append('q', searchString);
  queryParam.append('type', 'video');
  queryParam.append('key', 'AIzaSyDT_EldMwfXGH6MLXH9qYumq1Ip1o7KTcE');

  const url = new URL(`${baseAddress}/search?${queryParam.toString()}`);
  return fetch(url.href);
}

function youtubeApiSearchRelated(videoId) {
  // build query param
  const queryParam = new URLSearchParams();
  queryParam.append('part', 'snippet');
  queryParam.append('maxResults', 25);
  queryParam.append('relatedToVideoId', videoId);
  queryParam.append('type', 'video');
  queryParam.append('key', 'AIzaSyDT_EldMwfXGH6MLXH9qYumq1Ip1o7KTcE');

  const url = new URL(`${baseAddress}/search?${queryParam.toString()}`);
  return fetch(url.href);
}

function youtubeApiGetSpecificVideo(videoId) {
  // build query param
  const queryParam = new URLSearchParams();
  queryParam.append('part', 'snippet');
  queryParam.append('id', videoId);
  queryParam.append('key', 'AIzaSyDT_EldMwfXGH6MLXH9qYumq1Ip1o7KTcE');

  const url = new URL(`${baseAddress}/videos?${queryParam.toString()}`);
  return fetch(url.href);
}

export { youtubeApiSearch, youtubeApiSearchRelated, youtubeApiGetSpecificVideo };
