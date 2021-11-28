import React from 'react'
import Footer from '../Component/Footer'
import Form from '../Component/Form'
import Nav from '../Component/Nav'

export default function CreateBook() {
    return (
        <>
           <Nav/>
           <Form book={""} type={""}/>
           <Footer/> 
        </>
    )
}
