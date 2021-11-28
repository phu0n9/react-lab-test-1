import React,{ useState, useEffect} from 'react'
import '../stylesheet/Item.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import ProductList from './ProductList'

export default function Item({type,setType}) {
    let {id} = useParams()
    const [book,setBook] = useState({})

    useEffect(() => {
        const getProducts = async () => {
            await axios.get(`https://bookaroo-api.herokuapp.com/api/v1/product/`+id)
            .then(response => {
                setBook(response.data)
                setType(response.data.type)
            })
            .catch(error => {console.error(error)})
        }
        getProducts()
    },[id,setType])

    return (
        <main className="main">
            <div className='measure px-4 lg:px-0 py-4 lg:py-8 grid grid-cols-1 gap-4 lg:gap-12 lg:grid-cols-1-2' >
                <div className="lg:justify-self-end hidden lg:block">
                    <div className="mb-8 w-full">
                        <div className="relative shadow-book lg:w-book-detail-image w-2/3 mx-auto lg:mr-0">
                            <img className="block w-full" src={book.image} alt="book-cover"/>
                            <div className="absolute book-cover-shadow inset-0 pointer-events-none"></div>
                        </div>
                    </div>
                  
                </div>
                <div>
                    <div className="mb-4">
                        <h1 className='h1 leading-tight mb-2'>{book.name}</h1>
                        <div className="font-sans-medium text-gray text-sm">
                            <span className="comma-after-except-last">
                            {book.author} (Author)
                            </span>
                        </div>
                    </div>
                    <div className="lg:hidden mb-8 mx-auto">
                        <div className="relative shadow-book lg:w-book-detail-image w-2/3 mx-auto lg:mr-0">
                            <a data-lightbox="image" className="block w-full" href="https://images-us.bookshop.org/ingram/9780374157357.jpg?height=500&amp;v=v2">
                                <img className="w-full" src="https://images-us.bookshop.org/ingram/9780374157357.jpg?height=500&amp;v=v2" alt="cart-icon"/>
                            </a>
                            <div className="absolute book-cover-shadow inset-0 pointer-events-none"></div>
                        </div>
                    </div>
                    <div >
                        <div className="select-none">
                            <div className="hidden lg:block mb-4">
                                <label className="block font-sans-semibold mb-1 text-xs tracking-wide">FORMAT</label>
                                <div className="grid-cols-3 gap-4 hidden lg:grid mb-4 whitespace-no-wrap">
                                    <a className="flex flex-wrap rounded p-4 border-2 border-secondary bg-callout" href={"/book/"+id}>
                                        <h1 className="text-lg text-secondary font-sans-medium w-full truncate">{book.format}</h1>
                                        <div className="w-full">
                                            <span className="font-sans-bold">${book.price}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='mb-0 mb-md-4 text-sm leading-8'></div>
                            <div data-hook="product_price" className="mt-2 mt-md-6 columns five alpha">
                                <div className="add-to-cart flex flex-col lg:max-w-sm leading-loose">
                                    <div className="mb-2 mb-md-6 flex">
                                        <div className="w-full lg:w-1/2 mr-1">
                                            <button className="button primary inline-flex w-full " name="button" value="cart" type="submit">
                                                <img className="mr-2" src="https://rails-assets-us.bookshop.org/assets/ic_cart_light-b26a46b06b6ae40a9499157d18cb2eba8f8d81b0de5637f93ef851ea54ceae4c.svg" alt="cart"/>add to cart
                                            </button>
                                        </div>
                                        <div className='w-full wishlist-wrapper px-1'>
                                            <a className="button outline add-to-wishlist inline-flex w-full" href={`/update/${id}`}>
                                                <img className="mr-2" src="https://rails-assets-us.bookshop.org/assets/ic_wishlist_outline-59eb65d263d23e92a4fc375607f63cd7660add1b9eaed492ce5c74e4ab4876c8.svg" alt="update"/>
                                                <span className="text-secondary">Update</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8 title-description show-links">
                        <h3 className="h3 mb-2">Description</h3>
                        very long text
                    </div>
                    <div className="mb-8">
                        <h3 className='h3 mb-2'>Product Details</h3>
                        <div className="grid grid-cols-auto-1 col-gap-2 row-gap-1 items-center leading-none">
                            <div className="font-sans-medium text-right text-s text-gray">Price</div>
                            <div>
                                <b>${book.price}</b>
                            </div>
                            <div className="font-sans-medium text-right text-s text-gray">Type</div>
                            <div >{book.format}</div>
                            <div className="font-sans-medium text-right text-s text-gray ">Category</div>
                            <div>
                                <a href="/" className="comma-after-except-last hover:underline mr-1">
                                    {type.typeName}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='mb-8'>
                        <h3 className='h3 mb-2'>About the Author</h3>
                        <div className="space-y-4 show-lists">
                            <div>
                                <p>
                                    <b>{book.author}</b>
                                    description
                                </p>
                                <p></p>
                                <b>{book.author}</b>
                                description
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className="container px-5 lg:items-center flex flex-wrap">
            <a className="booklist-title ml-3 text-left flex-1 break-words overflow-hidden mr-2" href={`/type/${type.id}/0`}>
                    {type.typeName}
            </a>
            <a className=" button primary mt-2 w-full lg:mt-0 lg:w-auto" href={`/type/${type.id}/0`}>view lists</a>
        </div>
        <ProductList type={type.id}/>
    </main>
    )
}
