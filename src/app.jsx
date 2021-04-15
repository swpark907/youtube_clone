import { useState, useEffect } from 'react';
import styles from './app.module.css';
import Detail from './components/detail/detail';
import Navbar from './components/navbar/navbar'
import VideoList from './components/video-list/video_list'

function App({youtube}) {

  const [videos, setVideos] = useState([]);
  const [selectItem, setSelectItem] = useState(null);

  const selectVideo = video => {
    console.log(video)
    setSelectItem(video)    
  }

  useEffect( () => {
    youtube.mostPopular()
    .then(videos => setVideos(videos));
  }, [] );

  function searchVideo(query){
    youtube.search(query)
    .then(videos => {
      setVideos(videos);
      setSelectItem(null);
    })
  }


  return (
    <div className={styles.app}>
      <Navbar searchVideo={searchVideo}  ></Navbar>
      <section className={styles.content}>
        
          {
            selectItem && 
            <div className={styles.detail}>
              <Detail video={selectItem}  />
            </div>
          }
        
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={ selectItem? 'list' : 'grid' } />    
        </div>
      </section>
      
    </div>
  );
}

export default App;
