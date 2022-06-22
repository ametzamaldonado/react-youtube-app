import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

function ShowVideos(prop) {
    const { vid } = prop;
    const { title, thumbnails } = vid.snippet;
    const { medium = {} } = thumbnails;
    const id = vid.id.videoId;
    if (!id) {
        return <Modal />
    }

    return (
        <article key={id} className='video-results' id={id}>
            <Link to={`/videos/${id}`}>
                <img src={medium.url} alt=''/>
                <h3><span>{title}</span></h3>
            </Link>
        </article>
    )
}

export default ShowVideos;