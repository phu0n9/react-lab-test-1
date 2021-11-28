import React,{useState, useEffect} from 'react'
import Footer from '../Component/Footer'
import Form from '../Component/Form'
import Nav from '../Component/Nav'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function UpdateItem() {
    const [book,setBook] = useState({} || "")
    const [type,setType] = useState({} || "")
    let {id} = useParams()

    useEffect(() => {
        const getProducts = async () => {
            await axios.get(`https://bookaroo-api.herokuapp.com/api/v1/product/`+id)
            .then(response => {
                setBook(response.data)
                setType(response.data.type)
            })
            .catch(error => {console.error(error)})
        }
        getProducts()
    },[id])

    return (
        <>
            <Nav/>
            <Form book={book} type={type}/>
            <Footer/>
        </>
    )
}
