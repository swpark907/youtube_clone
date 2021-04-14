import { useState, useEffect } from 'react';
import styles from './app.module.css';
import Navbar from './components/navbar/navbar'
import VideoList from './components/video-list/video_list'

function App({youtube}) {

  const [videos, setVideos] = useState([]);

  useEffect( () => {
    youtube.mostPopular()
    .then(videos => setVideos(videos));
  }, [] );

  function searchVideo(query){
    youtube.search(query)
    .then(videos => setVideos(videos))
  }


  return (
    <div className={styles.app}>
      <Navbar searchVideo={searchVideo}></Navbar>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
