import React from 'react';
import WebsiteLayout from '.././layouts/WebsiteLayout'
import NewCityForm from '../components/NewCityForm'
import '../styles/NewCity.css'

export default function NewCity() {
  return (
    <WebsiteLayout>
      <NewCityForm/>
    </WebsiteLayout>
  )
}
