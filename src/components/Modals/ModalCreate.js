import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useCreateItineraryMutation } from '../../features/citiesAPI';
export default function ModalCreate({ children, onClose }) {

  const [createItinerary] = useCreateItineraryMutation()
  const userSession = JSON.parse(localStorage.getItem('user'))
  const [photo, setPhoto] = useState()
  const [duration, setDuration] = useState()
  const [price, setPrice] = useState()
  const [tags, setTags] = useState()
  const [name, setName] = useState()
  const [edit, setEdit] = useState()
  const [likes, setLikes] = useState(0)


  const handlePhoto = (e) => {
    setPhoto(e.target.value)
  }

  const handleDuration = (e) => {
    setDuration(e.target.value)

  }
  const handleTags = (e) => {
    setTags(e.target.value)
  }

  const handleName = (e) => {
    setName(e.target.value)

  }
  const handlePrice = (e) => {
    setPrice(e.target.value)

  }



  useEffect(() => {
    let objCreate = {
      user: children.idUser,
      name: name,
      city: children._id,
      likes: likes,
      photo: photo,
      price: price,
      tags: tags,
      duration: duration
    }

    setEdit(objCreate)

  }, [photo, price, tags, name, duration])






  const handleSubmit = (e) => {
    e.preventDefault()
    //mandarlo al controlador create

    if (edit.name.length <= 1) {
      Swal.fire({
        title: 'Name Failed',
        text: 'please verify that the name has more than 2 letters and does not include numbers'
      })
    } else {
      createItinerary(edit)
        .unwrap()
        .then(() => { })
        .then((error) => {
          console.log(error)
        })
      Swal.fire({
        icon: 'success',
        title: 'Registred with success',
        text: 'please look and read or create yours itineraries',
        confirmButtonText: 'Do It'
      })


    }

  }



  return (
    <div className='createItiner'>
      <h3 className="createH3">Create your New Itinerary </h3>
      <p >Name  </p>
      <input type='text' onChange={handleName}></input>


      <h4 className="createH4">User :   {userSession.name} </h4>


      <p >City   {children.city} </p>

      <p >Image  </p>
      <input type='text' onChange={handlePhoto}></input>
      <p >Price </p>
      <input type='Number' onChange={handlePrice}></input>

      <p >Tags  </p>
      <input type='Number' onChange={handleTags}></input>
      <p >Duration</p>
      <input type='Number' onChange={handleDuration}></input>
      <div className='createButtons'>

        <button onClick={handleSubmit} className='save'>Save</button>
        <button onClick={onClose} className='close'>Close</button>
      </div>
    </div>
  )
}
