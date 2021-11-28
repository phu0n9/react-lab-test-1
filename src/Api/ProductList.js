import React, { useState, useEffect, useRef} from 'react'
import axios from 'axios'
import '../stylesheet/Section.css'
import gsap from "gsap";
import Loading from '../Component/Loading'

export default function ProductList(type) {
    const [books, setBooks] = useState([])
    let scrl = useRef(null)
    const [scrollX, setscrollX] = useState(0)
    const [scrolEnd, setscrolEnd] = useState(false)

    useEffect(() => {
        const getBookListByType = async() => {
            await axios.get(`https://bookaroo-api.herokuapp.com/api/v1/type/findProductByTypeAndPage/${type.type}/${0}`,{
                headers: {"Access-Control-Allow-Origin": "*"}
                })
                .then(response => {
                    setBooks(response.data)
                })
                .catch(error => console.error(error))
        }
        getBookListByType()
    }, [type])

    if (type.length === 0) {
        return <Loading/>
    }

      //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  }

  //Anim
  const anim = (e) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.5 });
  }
  const anim2 = (e) => {
    gsap.from(e.target, { scale: 1.5 });
    gsap.to(e.target, { scale: 1 });
  }

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft)
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true)
    } else {
      setscrolEnd(false)
    }
  }

    return ( 
        <div className="container linear-product-listing relative"  >
                <div className="items flex overflow-scroll-x" onScroll={scrollCheck} ref={scrl}>
                    {
                        books.map((book, index) => {
                            return <a className = "cover my-4 mr-2" href = {"/book/"+book.id} key = { index } >
                                <div className = "product-image" >
                                <img className = "book-image"src = { book.image}alt = "book-cover" />
                                </div> 
                            </a>
                        })
                    } 
                </div>
                {scrollX !== 0 && 
                    (
                    <div className="prev left-0 -translate-x-6 hidden lg:block outline-none cursor-pointer absolute transform -translate-y-1/2 z-40" onClick={() =>slide(-20)} onMouseEnter={(e) =>anim(e)} onMouseLeave={(e) =>anim2(e)} >
                        <img src="https://rails-assets-us.bookshop.org/assets/ic_fat_arrow_left-78d4b37e9bbb5fee5ded46062f2acb0558ea2c52e03e1d4cf00fe7c668c48dac.svg" alt="back-btn" />
                    </div>
                )}
                {!scrolEnd && (
                    <div className="next right-0 translate-x-6 hidden lg:block outline-none cursor-pointer absolute transform -translate-y-1/2 z-40" onClick={() =>slide(+20)} onMouseEnter={(e) =>anim(e)} onMouseLeave={(e) =>anim2(e)} >
                    <img src="https://rails-assets-us.bookshop.org/assets/ic_fat_arrow_right-8cd117ef71cad1e27c159d775f4d2d0a806c8f173deb5be52b4a6dacc7fdfa0d.svg" alt="forward-btn"  />
                </div>
                )}
            </div>
        
        
    )
}