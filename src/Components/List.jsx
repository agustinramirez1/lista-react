import React, { useState } from 'react'
import Item from './Item';


function List() {
    let list = [
        {
            "element": "Alaska",
            "subElements": [
                "Bascom"
            ]
        },
        {
            "element": "Connecticut",
            "subElements": []
        },
        {
            "element": "Wisconsin",
            "subElements": [
                "Oretta",
                "Konterra",
                "Guthrie"
            ]
        },
        {
            "element": "Nebraska",
            "subElements": [
                "Jennings",
                "Harviell",
                "Alfarata",
                "Bluffview",
                "Escondida"
            ]
        },
        {
            "element": "Georgia",
            "subElements": []
        }
    ]

    
    const [indexActivo, setIndexActivo] = useState(null)
    
    return (
        <ul>
            {list.map((item, index) =>
                <Item 
                key={index} 
                index={index} 
                item={item} 
                indexActivo={indexActivo}
                setIndexActivo={setIndexActivo}
                 />)
            }
        </ul>

    );
}



export default List