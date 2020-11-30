import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{
    //Si el useState está vacío, error feo --> Warning: A component is changing a controlled input to be uncontrolled.
    const [categories, setCategories] = useState(['One Piece']);

    const handleAdd = () => {
        setCategories([...categories, 'HunterXHunter']);
    }
    
    return (<>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}></AddCategory>
        <hr/>
        
        <ol>
            {
                categories.map(cat => {
                    return <GifGrid key={cat} category={cat}/>
                })
            }
        </ol>
    </>);
};