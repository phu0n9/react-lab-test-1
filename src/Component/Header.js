import React from 'react'
import '../stylesheet/Home.css'
import '../stylesheet/Header.css'
import SearchBar from './SearchBar'

export default function Header() {
    return (
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb- 0">One Page Bookshop</h1>
                    <p className="masthead-subheading mb-0">Everyone's Bookshop</p>
                    <SearchBar />
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
    )
}
