import React,{useState,useEffect} from 'react'
import '../stylesheet/Section.css'
import '../stylesheet/Home.css'
import ProductList from './ProductList'
import Loading from '../Component/Loading'
import axios from 'axios'

export default function Section() {
    const [typeList,setTypeList] = useState([])

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

    if(typeList.length === 0){
        return <Loading/>
    }

    return (
    <>
        {typeList.map((type,index) =>{
            return <section className="col-span-2 pb-4 section" key={index}>
            <div className="container px-5 lg:items-center flex flex-wrap">
                  <img className="avatar-light" loading="lazy" alt="logo" src="https://images-production.bookshop.org/spree/curators/avatars/10/thumb/Social_media_Icon_alternative.jpg?1573251482"/>
                <a className="booklist-title ml-3 text-left flex-1 break-words overflow-hidden mr-2" href={`/type/${type.id}/0`}>
                    {type.typeName}
                </a>
                <a className=" button primary mt-2 w-full lg:mt-0 lg:w-auto" href={`/type/${type.id}/0`}>view lists</a>
            </div>
            <ProductList type={parseInt(type.id)} />
        </section>
        })}
        
    </>
    
    )
}
