import { React, useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Happy']);

    // console.log(categories);

    const onAddCategory = (newCategory) => {
        //Valorant
        // setCategories([...categories, 'Valorant']);
        // console.log('Valorant');

        // categories.push('Valorant');
        // categories.push(newCategory);

        // setCategories(cat => [...cat, newCategory]);

        // console.log(newCategory);

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);

    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            // currentCategories={categories}
            />

            {/* Listado de Gif */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
                {/* <li>ABC</li>
                <li>123</li>
                <li>XYZ</li> */}
            </ol>
            {/* Gif Item */}
        </>
    )
};
