import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useAddLikeMutation } from '../features/citiesAPI';

const Like = (props) => {

    const [likeDislike] = useAddLikeMutation()
    const [like, setLike] = useState('🤍')
    const [likeCount, setLikeCount] = useState(props.like.length)

    useEffect(() => {
        if (props.like.includes(props.userId)) {
            setLike('❤️')
        }
    }, [props.like, props.userId])

    const handleLike = () => {
        if (like === '🤍') {
            setLike('❤️')
            setLikeCount(likeCount + 1)
            likeDislike(props.itinerary)
        } else {
            setLike('🤍')
            setLikeCount(likeCount - 1)
            likeDislike(props.itinerary)
        }
    }

    return (
        <>
            <button onClick={handleLike}>{like}{likeCount}</button>
        </>
    )
}

export default Like