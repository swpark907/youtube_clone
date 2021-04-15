import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
    ({video, video: {snippet}, onVideoClick, display}) => {
    
        const displayType = display === 'list'? styles.list : styles.grid;
        
        return (
        <li className={`${styles.container} ${displayType}  `} onClick={() => onVideoClick(video)}>
            <div className={styles.video}>
                <img src={snippet.thumbnails.medium.url}  className={styles.thumbnail} alt="thumbnail"></img>
                <div className={styles.desc}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
        )}
);

export default VideoItem;