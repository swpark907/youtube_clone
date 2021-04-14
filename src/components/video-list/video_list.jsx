import React from 'react';
import VideoItem from '../video-item/video-item';
import styles from '../video-item/video_item.module.css';

const VideoList = (props) => (
        <ul className={styles.videos}>
            {props.videos.map(video => 
                <VideoItem key={video.id}  video={video}/>
            )}
        </ul>
)
    ;

export default VideoList;