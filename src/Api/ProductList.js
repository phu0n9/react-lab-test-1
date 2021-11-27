import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../stylesheet/Section.css'
import Loading from '../Component/Loading'

export default function ProductList(type) {
    const [books,setBooks] = useState([])
    useEffect(() =>{
        console.log(type)
        const getBookListByType = async () =>{
            await axios.get(`http://localhost:8080/ap1/v1/type/findProductByTypeAndPage/${type.type}/${0}`)
            .then(response =>{
                setBooks(response.data)
            })
            .catch(error => console.error(error))
        }
        getBookListByType()
    },[type])

    if(type.length === 0){
        return <Loading/>
    }

    return (
    <>
        {
            books.map((book,index) =>{
                return <a className="cover my-4 mr-2" href="/list" key={index}>
                <div className="product-image">
                    <img src={book.image} alt="book-cover"/>
                </div>
            </a>
            })
        }        
    </>
    )
}
