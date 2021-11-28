import React,{useState, useEffect} from 'react'
import '../stylesheet/BookList.css'
import axios from 'axios'
import Loading from '../Component/Loading'
import Filter from '../Component/Filter'
import BookGrid from '../Component/BookGrid'
import {useLocation} from "react-router-dom"
import Pagination from '../Component/Pagination'

function useQuery() {
    const { search } = useLocation()
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Booklist({typeId,pageNum}) {
    const [type,setType] = useState({})
    const [bookList,setBookList] = useState([])
    let search = useQuery().get('keywords')

    useEffect(()=>{
        const getBookList = async () => {
            if (search == null){
                await axios.get(`/api/v1/type/findProductByTypeAndPage/${typeId}/${pageNum}`)
                .then(response => {
                    setBookList(response.data)
                })
                .catch(error => {console.error(error)})
            }
            else{
                await axios.get(`/api/v1/product/findByName/${pageNum}?name=${search}`)
                .then(response => setBookList(response.data))
                .catch(error => console.error(error))
            }
        }
        getBookList()
    },[pageNum,typeId,search])

    useEffect(() =>{
        const getType = async () =>{
            await axios.get(`/api/v1/type/${typeId}`)
            .then((response) =>setType(response.data))
            .catch((error) => console.error(error))
        }
        getType()
    },[typeId])

    if(bookList.length === 0){
        return <Loading/>
    }

    return (
        <>
            <main className="main">
            <Pagination bookList={bookList} pageNum={pageNum} typeId={typeId} search={search}/>
                <section className="pb-8">
                    <Filter pageNum={pageNum}/>
                    <div className="measure section">
                    <p className="booklist-title ml-3 text-left flex-1 break-words">{type.typeName}</p>
                        <BookGrid bookList={bookList}/>
                    </div>
                </section>
            </main>
        </>
        
    )
}
