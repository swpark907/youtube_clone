import React from 'react';
import Navbar from '../navbar/navbar';
import styles from '../detail/detail.module.css'

const Detail = ({video}) => {

    return (
        <section className={styles.detail}>

        <iframe className={styles.video}
            id="ytplayer"
            type="text/html"
            width="100%"
            height="405"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0"
            allowfullscreen></iframe>
        <h2> {video.snippet.title} </h2>
        <h2> {video.snippet.channelTitle} </h2>
        <pre className={styles.description}> {video.snippet.description} </pre>
        </section>
    )

};

export default Detail;