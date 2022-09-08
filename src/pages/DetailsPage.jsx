import React from 'react'
import WebsiteLayout from '../layouts/WebsiteLayout'
import Details from '../components/Details'
import '../styles/DetailsPage.css'
import Itinerary from '../components/Itinerary';

export default function DetailsPage() {

  return (
    <WebsiteLayout>
      <Details />
      <Itinerary/>
    </WebsiteLayout>
  )
}
