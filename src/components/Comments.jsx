import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/Comment.css'
import ModalCreateComment from './Modals/ModalCreateComment'
import ModalEditComment from './Modals/ModalEditComment'
import { useRemoveCommentMutation } from '../features/citiesAPI'
import { useSelector } from 'react-redux'

const Comments = (props) => {

    const id = useSelector(state => state.auth.id)
    const role = useSelector(state => state.auth.role)
    const [comments, setComments] = useState([])
    const [create, setCreate] = useState(false)
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState({})
    const [removeComment] = useRemoveCommentMutation()




    const userLocal = localStorage.getItem('user')
    console.log(userLocal)
    //obtener id de usuario de bsdd para comparar y ver que mstrar
    //mandar el nombre ,id y foto por props y utilizarlo en el modalCreate



    const handleCreate = () => {
        setCreate(true)
    }

    const handleClose = () => {
        setCreate(false)
        setShow(false)
    }

    const handleRemove = (e) => {
        let remove = e.target.value
        //mutation para eliminar
        removeComment(remove)
    }





    useEffect(() => {
        axios.get(`http://localhost:4000/comments/itinerary/${props.itinerary}`)
            .then(res => setComments(res.data.response))
            .catch(err => console.log(err))
    }, [props.itinerary])


    const cardComment = (data) => {
        console.log(data)
        if (id === data.user._id || role === 'admin') {
            return (
                <div className="comments-container">
                    <button onClick={handleRemove} value={data._id}>delete</button>
                    <div className="comments-user">
                        <img src={data.user.photo} className="comments-user-photo" />
                        <p className='comments-user-info'>{data.user.name}</p>
                        <p className='comments-user-info'>{data.user.mail}</p>
                    </div>
                    <div className="comments-message-container">
                        <p className='comments-message'>{data.comment}</p>
                        <button onClick={() => setEdit({
                            id: data.user._id,
                            name: data.user.name,
                            photo: data.user.photo,
                            idComment: data._id
                        }) & setShow(true)}>edit</button>
                    </div>
                </div>
            )

        } else {
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
    }



    return (
        <div>
            <button onClick={handleCreate}>Add Comment</button>
            {create ? <ModalCreateComment children={{ idItiner: props.itinerary, idUser: id }} onClose={handleClose} /> : show ? <ModalEditComment children={edit} onClose={handleClose} /> : comments.map(cardComment)}

        </div>
    )
}

export default Comments