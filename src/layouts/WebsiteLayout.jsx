import React from 'react'
import Footer from '../components/Footer'

export default function WebsiteLayout(props) {

    return (
        <>
            <div>Header</div>
            {props.children}
            <Footer />
        </>
    )
}
