import React,{useState, useEffect} from 'react'
import '../stylesheet/BookList.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Filter(pageNum) {
    const [typeList,setTypeList] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        const getTypeList = async () =>{
            await axios.get(`https://bookaroo-api.herokuapp.com/api/v1/type`,{
                headers: {"Access-Control-Allow-Origin": "*"}
            })
            .then((response) =>{
                setTypeList(response.data)
            })
            .catch((error) => console.error(error))
        }
        getTypeList()
    },[])

    const selectOnChange = (e) =>{
        e.preventDefault()
        navigate(`/type/${e.target.value}/0`)
    }

    return (
        <section className="filter-container">
            <h1 className="pl-6 pr-2 py-2 text-sm w-128">Search Bar</h1>
            <form className="pl-6 pr-2 py-2 text-sm w-128 width-10" action="/search/0" method="get" acceptCharset="UTF-8">
                <input type="search" name="keywords" className="w-10/12" placeholder="Search"/>
                <button type="submit" className="submit">
                    <img src="https://rails-assets-us.bookshop.org/assets/ic_search_red-7d1a13a60daff70bb90df7cef4d5255a11c09312ba796317f7b701327183cdaf.svg" alt="search-btn"/>
                </button>
             </form>
            <p className="pl-6 pr-2 py-2 text-sm w-128">Categories</p>
                <form action="/book" method="get" acceptCharset="UTF-8" className="pl-6 pr-2 py-2 text-sm w-128">
                    <select name="type" onChange={selectOnChange}>
                    {
                        typeList.map((type,index)=>{
                            return <option value={type.id} key={index}>{type.typeName}</option>
                        })
                    }
                    </select>
                </form>
        </section>
    )
}
