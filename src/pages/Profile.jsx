import React from 'react'
import WebsiteLayout from '../layouts/WebsiteLayout'
import '../styles/DetailsPage.css'
import UserProfile from '../components/UserProfile'

export default function Profile() {

  return (
    <WebsiteLayout>
      <UserProfile/>
    </WebsiteLayout>
  )
}