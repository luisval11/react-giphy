import React from 'react'

export const GifGridItem = (ima) => {
    return (
        <li className="card animate__animated animate__fadeIn">
            <img src={ima.image} alt={ima.title}></img>
            <p>{ima.title}</p>
        </li>
    )
}
