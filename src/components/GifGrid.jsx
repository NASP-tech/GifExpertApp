// import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGif";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    // console.log({isLoading});

    return (
        <>
            <h3>{category}</h3>
            {
                // isLoading 
                // ?(<h2>Cargando...</h2>)
                // :null
                isLoading && (<h2>Cargando...</h2>)
            }
            
            {/* 
            <h5>{counter}</h5>
            <button onClick={() => setCounter(counter + 1)}>+1</button> */}
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem 
                            key={image.id}
                            // image={image.title}
                            // url={image.url}
                            {...image}
                        />
                    ))
                }       
            </div>
        </>
    )
}
