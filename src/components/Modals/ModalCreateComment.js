import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useCreateCommentMutation } from '../../features/citiesAPI';
import * as jose from 'jose'


export default function ModalCreateComment({ children, onClose }) {

  const [createComment] = useCreateCommentMutation()//cambiar api
  const userSession = JSON.parse(localStorage.getItem('user'))
  const [name, setName] = useState()
  const [edit, setEdit] = useState()



  const handleComent = (e) => {
    setName(e.target.value)

  }
  //agarrar el mail del local y llamar al controlador read con ese email para obtener el id


  useEffect(() => {
    let objCreate = {
      comment: name,
      itinerary: children.idItiner,
      user: children.idUser,
    }
    setEdit(objCreate)
  }, [name, children.idItiner, children.idUser])


  const handleSubmit = (e) => {
    e.preventDefault()
    //mandarlo al controlador create

    if (edit.comment.length > 300) {
      Swal.fire({
        title: 'Comment Failed',
        text: 'please verify that the comment has more than 300 characters'
      })
    } else {
      createComment(edit)
        .unwrap()
        .then(() => { })
        .then((error) => {
          console.log(error)
        })
      Swal.fire({
        icon: 'success',
        title: 'Comment with success',
        text: 'thanks for add contributions',
        confirmButtonText: 'ok'
      })


    }

  }



  return (
    <div className='createItiner'>
      <h3 className="createH3">Create your Comment </h3>
      <p >Comment  </p>
      <input type='text' onChange={handleComent}></input>


      <h4 className="createH4">User :   {userSession.name} </h4>

      <div className='createButtons'>

        <button onClick={handleSubmit} className='save'>Save</button>
        <button onClick={onClose} className='close'>Close</button>
      </div>
    </div>
  )
}