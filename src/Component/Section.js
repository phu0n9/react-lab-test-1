import React,{useState,useEffect} from 'react'
import '../stylesheet/Section.css'
import '../stylesheet/Home.css'
import ProductList from '../Api/ProductList'
import Loading from '../Component/Loading'

import axios from 'axios'

export default function Section() {
    const [typeList,setTypeList] = useState([])

    useEffect(() =>{
        const getTypeList = async () =>{
            await axios.get('http://localhost:8080/ap1/v1/type')
            .then((response) =>{
                setTypeList(response.data)
            })
            .catch((error) => console.error(error))
        }
        getTypeList()
        console.log(typeList)
    },[typeList])

    if(typeList.length === 0){
        return <Loading/>
    }

    return (
    <>
        {typeList.map((type,index) =>{
            return <section className="col-span-2 pb-4 section" key={index}>
            <div className="container px-5 lg:items-center flex flex-wrap">
                <a href="/list">
                    <img className="avatar-light" loading="lazy" alt="logo" src="https://images-production.bookshop.org/spree/curators/avatars/10/thumb/Social_media_Icon_alternative.jpg?1573251482"/>
                </a>
                <a className="booklist-title ml-3 text-left flex-1 break-words overflow-hidden mr-2" href="/list">
                    {type.typeName}
                </a>
                <a className=" button primary mt-2 w-full lg:mt-0 lg:w-auto" href="/list">view lists</a>
            </div>
            <div className="container linear-product-listing relative">
                <div className="items flex overflow-scroll-x">
                    <ProductList type={type.typeName}/>
                </div>
                <div className="prev left-0 -translate-x-6 hidden lg:block outline-none cursor-pointer absolute transform -translate-y-1/2 z-40">
                    <img src="https://rails-assets-us.bookshop.org/assets/ic_fat_arrow_left-78d4b37e9bbb5fee5ded46062f2acb0558ea2c52e03e1d4cf00fe7c668c48dac.svg" alt="back-btn" />
                </div>
                <div className="next right-0 translate-x-6 hidden lg:block outline-none cursor-pointer absolute transform -translate-y-1/2 z-40">
                    <img src="https://rails-assets-us.bookshop.org/assets/ic_fat_arrow_right-8cd117ef71cad1e27c159d775f4d2d0a806c8f173deb5be52b4a6dacc7fdfa0d.svg" alt="forward-btn" />
                </div>
            </div>
        </section>
        })}
        
    </>
    
    )
}
