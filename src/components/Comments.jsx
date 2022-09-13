import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/Comment.css'

const Comments = (props) => {

    console.log(props)
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/comments/itinerary/${props.itinerary}`)
            .then(res => setComments(res.data.response))
            .catch(err => console.log(err))
    }, [props.itinerary])

    const cardComment = (data) => {
        return (
            <div className="comments-container">
                <div className="comments-user">
                    <img src={data.user.photo} className="comments-user-photo" />
                    <p className='comments-user-info'>{data.user.name}</p>
                    <p className='comments-user-info'>{data.user.mail}</p>
                </div>
                <div className="comments-message-container">
                    <p className='comments-message'>{data.comment}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            {comments.map(cardComment)}
        </div>
    )
}

export default Comments