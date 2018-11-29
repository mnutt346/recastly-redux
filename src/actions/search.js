import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import store from '../store/store.js';


const handleVideoSearch = (q) => (
 
  //TODO:  Write an asynchronous action to handle a video search!
  searchYouTube({YOUTUBE_API_KEY, q}, () => { store.dispatch(changeVideoList); } )

);

export default handleVideoSearch;


