import React from "react"
import { Link as LinkRouter } from "react-router-dom"

export default function CallToAction() {
    return (
        <LinkRouter to="/cities" className="header-btn">ENTER</LinkRouter>
    )
}