import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


const handleVideoSearch = (q) => (
 
  //TODO:  Write an asynchronous action to handle a video search!
//   type: '', 
//   videos: searchYouTube({
//     key: YOUTUBE_API_KEY,
//     query: q
//   }, changeVideoList(videos))
  {type: 'SEARCH_VIDEO'}
  
);

export default handleVideoSearch;


// this.props.searchYouTube(options, (videos) =>
//   this.setState({
//     videos: videos,
//     currentVideo: videos[0]
//   })
// );