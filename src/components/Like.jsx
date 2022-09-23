import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useAddLikeMutation } from '../features/citiesAPI';
import * as jose from 'jose'

const Like = (props) => {

    const [likeDislike] = useAddLikeMutation()
    const [like, setLike] = useState('🤍')
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if(props.like.length != 0){
            setLike('❤️')
        }
    }, [props.like.length])

    function handleLike () {
        if(clicked === false && props.like.length === 0){
            likeDislike(props.itinerary)
            setLike('❤️')
            setClicked(true)
        } else {
            likeDislike(props.itinerary)
            setLike('🤍')
            setClicked(false)
        }
    }

    return (
        <>
            <button onClick={handleLike} >{like}{props.like.length}</button>
        </>
    )
}

export default Like