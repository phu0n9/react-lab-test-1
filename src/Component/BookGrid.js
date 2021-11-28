import React from 'react'

export default function BookGrid({bookList}) {

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
                <form className="pt-4 col-span-2 lg:col-span-1 lg:mt-auto lg:pt-0" action="/orders/populate_remote" acceptCharset="UTF-8" method="delete">
                    <button className="button primary inline-flex w-full " name="button" value="cart" type="submit">
                        <img className="mr-2" src="https://rails-assets-us.bookshop.org/assets/ic_cart_light-b26a46b06b6ae40a9499157d18cb2eba8f8d81b0de5637f93ef851ea54ceae4c.svg" alt="cart"/>add to cart
                    </button>
                </form>
            </div>
            })}
        </div>
    )
}
