import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../App.css'

export default function WebsiteLayout(props) {

    

    return (
        <div className="layout">
            <Header/>
            {props.children}
            <Footer />
        </div>
    )
}
