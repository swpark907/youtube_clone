import { useState, useEffect, useCallback } from 'react';
import styles from './app.module.css';
import Detail from './components/detail/detail';
import Navbar from './components/navbar/navbar'
import VideoList from './components/video-list/video_list'

function App({youtube}) {

  const [videos, setVideos] = useState([]);
  const [selectItem, setSelectItem] = useState(null);

  const selectVideo = video => {    
    setSelectItem(video)    
  }

  useEffect( () => {
    youtube.mostPopular()
    .then(videos => setVideos(videos));
  }, [youtube] );

  const searchVideo =  useCallback(
    query => {      
      youtube.search(query)
      .then(videos => {
        setVideos(videos);
        setSelectItem(null);
        
      })
    }
  ,[youtube]) 


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
