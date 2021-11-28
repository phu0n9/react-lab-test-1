import React from 'react'
import Booklist from '../Api/Booklist'
import {useParams} from 'react-router-dom'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'

export default function BookListPage() {
    let {typeId,pageNum} = useParams()

    return (
        <>
            <Nav/>
            <Booklist typeId={typeId} pageNum={pageNum}/>
            <Footer/>
        </>
    )
}
