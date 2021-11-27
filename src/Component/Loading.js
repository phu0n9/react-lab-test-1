import React from 'react'
import '../stylesheet/Section.css'

const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg"

export default function Loading() {
    return (
        <div className="spinner">
            <img className="loading" src={loadingImg} alt="Loading..." />
        </div>
    )
}
