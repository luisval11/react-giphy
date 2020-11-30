import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from '../components/GifGridItem';

//rafc--> La salud para crear componentes

export const GifGrid = ({category}) => {
    
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        {loading && <p className="animate__animated animate__flash">LOADING...</p>}
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        <div className="card-grid">
            {
                images.map(img => {
                    return <GifGridItem key={img.id} {...img}></GifGridItem>
                })
            }
        </div>
        </>
    )
}