import YoutubeVideosMock from '../mocks/youtube-videos-mock';

export function createMockFav() {
  localStorage.setItem('favouriteVideos', JSON.stringify(YoutubeVideosMock.items));
}

export function lsGetFavouriteList() {
  const favouriteVideosString = localStorage.getItem('favouriteVideos');
  const parsedFavouriteVideos = JSON.parse(favouriteVideosString); // should check if array?
  return parsedFavouriteVideos;
}

export function lsGetFavourite(videoId) {
  const parsedFavouriteVideos = lsGetFavouriteList();
  return parsedFavouriteVideos.find((video) => videoId === video.id.videoId);
}

export function lsAddToFavourite(video) {
  const parsedFavouriteVideos = lsGetFavouriteList();
  const newList =
    parsedFavouriteVideos !== null ? [...parsedFavouriteVideos, video] : [video];
  localStorage.setItem('favouriteVideos', JSON.stringify(newList));
}

export function lsRemoveFromFavourite(videoId) {
  const parsedFavouriteVideos = lsGetFavouriteList();
  const newList = parsedFavouriteVideos.filter((video) => video.id.videoId !== videoId);
  localStorage.setItem('favouriteVideos', JSON.stringify(newList));
}

export function lsCheckIfFavourite(videoId) {
  const parsedFavouriteVideos = lsGetFavouriteList();
  if (parsedFavouriteVideos === null) return false;
  return parsedFavouriteVideos.findIndex((video) => video.id.videoId === videoId) !== -1;
}
