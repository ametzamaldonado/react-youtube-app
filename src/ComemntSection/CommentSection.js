import { useState } from "react";
import './CommentSection.css'

const CommentSection = ( props ) => {
    console.log(props)
    const {id, setCommentArry, arrayOfComments} = props;
    console.log(setCommentArry)
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    

    const onSubmit = (e) => {
        e.preventDefault();
        const updatedComment = {[id]:`${name}, says "${comment}"`}
        setCommentArry([...arrayOfComments, updatedComment]);
    }

    console.log(arrayOfComments);
    return (
        <>
        <form onSubmit={onSubmit}>
            Name: <input
                id={name}
                className="name"
                type="text"
                onChange={e => {
                    setName(e.target.value);
                }}
                required
            />
            Comment: <input
                id={name}
                className="comment"
                type="text"
                onChange={e => {
                    setComment(e.target.value);
                }}
                placeholder="Insert comment here"
                required
            />
            <button className='form-button' >Submit Comment</button>
        </form>
        <div>
            <ul>
                    {arrayOfComments.map((e) => {
                        if(Object.keys(e).toString() === id)
                        {
                           return <li key={name}>{Object.values(e)}</li>
                        }
                    })}
            </ul>
        </div>
        </>
    );

}

export default CommentSection;