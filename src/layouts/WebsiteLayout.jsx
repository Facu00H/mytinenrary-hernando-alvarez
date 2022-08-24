import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function WebsiteLayout(props) {

    

    return (
        <>
            <Header/>
            {props.children}
            <Footer />
        </>
    )
}
