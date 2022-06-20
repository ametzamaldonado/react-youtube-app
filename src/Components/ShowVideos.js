import React from 'react';
import { Link } from 'react-router-dom';

function ShowVideos(prop) {
    const { vid } = prop;
    const { title, thumbnails } = vid.snippet;
    const { medium = {} } = thumbnails;
    const id = vid.id.videoId;
    return (
        <article className='video-results' id={id}>
            <Link to={`/view/${id}`}>
                <img width={medium.width} height={medium.height} src={medium.url} alt=''/>
                <h3><span>{title}</span></h3>
            </Link>
        </article>
    )
}

export default ShowVideos;