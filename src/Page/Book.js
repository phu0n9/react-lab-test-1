import React,{useState} from 'react'
import Footer from '../Component/Footer'
import Item from '../Api/Item'
import Nav from '../Component/Nav'
import '../stylesheet/Book.css'

export default function Book() {
    const [type,setType] = useState({})

    return (
    <>
        <Nav/>
        <Item type={type} setType={setType}/>     
        <Footer/>
    </> 
    )
}
