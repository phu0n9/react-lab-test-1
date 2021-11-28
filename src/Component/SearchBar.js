import React from 'react'
import '../stylesheet/Header.css'

export default function SearchBar() {
    return (
    <form className="pl-6 pr-2 py-2 text-sm w-128 search-form" action="/search/0" method="get" acceptCharset="UTF-8">
        <input type="search" name="keywords" className="w-10/12" placeholder="Search"/>
        <button type="submit" className="submit">
            <img src="https://rails-assets-us.bookshop.org/assets/ic_search_red-7d1a13a60daff70bb90df7cef4d5255a11c09312ba796317f7b701327183cdaf.svg" alt="search-btn"/>
        </button>
    </form>
    )
}
