import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar'
import VideoList from './components/video-list/video_list'

function App() {

  const [videos, setVideos] = useState([]);

  useEffect( () => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCXyT92wesjrZIXZkXmgO6Dul9J46oAfos", requestOptions)
      .then(response => response.json())
      .then(result => {setVideos(result.items)})
      .catch(error => console.log('error', error));

  }, [] );

  

  return (
    <>
      <Navbar></Navbar>
      <VideoList videos={videos} />
    </>
  );
}

export default App;
