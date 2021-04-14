import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video: {snippet}}) => (
    <li className={styles.container}>
        <div className={styles.video}>
            <img src={snippet.thumbnails.medium.url}  className={styles.thumbnail}></img>
            <div className={styles.desc}>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>
        </div>

    </li>
    );

export default VideoItem;