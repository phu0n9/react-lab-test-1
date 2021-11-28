import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function BookGrid({bookList,typeId}) {
    const navigate = useNavigate()

    const addToCartOnClick = async (e) => {
        await axios.delete("https://bookaroo-api.herokuapp.com/api/v1/product/"+e.target.value)
        .then(() => {
            navigate(`/type/${typeId}/0`)
        })
        .catch(error => console.error(error))
    }

    return (
        <div className="booklist">
            {bookList.map((book, index) =>{
                return <div className="booklist-book" key={index}>
                <div className="cover-wrapper">
                    <a className="cover" href={"/book/"+book.id}>
                        <div className="product-image">
                            <img className="w-full" src={book.image} alt="book-cover" />
                        </div>
                    </a>
                </div>
                <h2 className="font-serif-bold lg:pt-4 leading-tight">
                    <a href={"/book/"+book.id}>{book.name}</a>
                </h2>
                <h3 className="text-s">{book.author}</h3>
                <div className="pb-4 self-start text-s">
                    <div className="font-sans-bold">${book.price}</div>
                </div>
                <button className="button primary inline-flex w-full " value={book.id} type="submit" onClick={addToCartOnClick}>
                    <img className="mr-2" src="https://rails-assets-us.bookshop.org/assets/ic_cart_light-b26a46b06b6ae40a9499157d18cb2eba8f8d81b0de5637f93ef851ea54ceae4c.svg" alt="cart"/>add to cart
                </button>
            </div>
            })}
        </div>
    )
}
