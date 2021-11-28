import React,{useState} from 'react'
import '../stylesheet/BookList.css'
import { useNavigate } from 'react-router-dom';

export default function Pagination({bookList,pageNum,typeId,search}) {
    const [postsPerPage] = useState(10)
    const indexOfLastPost = parseInt(pageNum) * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    let space = indexOfLastPost - indexOfFirstPost
    const navigate = useNavigate()

    const onBackButtonClick = ()=>{
        if(pageNum > 0){
            if (search === null){
                navigate(`/type/${typeId}/${parseInt(pageNum)-1}`)
            }
            else{
                navigate(`/search/${parseInt(pageNum)-1}?keywords=${search}`)
            }
        }
        else{
          alert("This is end of page")
        }
      }
  
      const onForwardButtonClick = ()=>{    
        if(space === bookList.length){
            if(search === null){
                navigate(`/type/${typeId}/${parseInt(pageNum)+1}`)
            }
            else{
                navigate(`/search/${parseInt(pageNum)+1}?keywords=${search}`)
            }
        }
        else{
          alert("This is end of page")
        }
      }
    
      return (
        <>
        <div className='pl-6 pr-2 py-2 text-sm w-128 item-float-right'>
            {pageNum > 0 && 
                    (
                    <span className="page-link" onClick={onBackButtonClick} >
                        <img src="https://rails-assets-us.bookshop.org/assets/ic_fat_arrow_left-78d4b37e9bbb5fee5ded46062f2acb0558ea2c52e03e1d4cf00fe7c668c48dac.svg" alt="back-btn" />
                    </span>
                )}
                {space === bookList.length && (
                    <span className="page-link" onClick={onForwardButtonClick} >
                    <img src="https://rails-assets-us.bookshop.org/assets/ic_fat_arrow_right-8cd117ef71cad1e27c159d775f4d2d0a806c8f173deb5be52b4a6dacc7fdfa0d.svg" alt="forward-btn"  />
                </span>
            )}
        </div>
       
          {/* <tr className='pl-6 pr-2 py-2 text-sm w-128 item-float-right'>
            <td onClick={onBackButtonClick} className='page-link'>Back</td>
            <td>{pageNum}</td>
            <td onClick={onForwardButtonClick} className='page-link'>Forward</td>
          </tr> */}
        </>
      )
}
