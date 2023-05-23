import React, { useState } from 'react'
import Item from './Item';



function List() {
    let data = [
        {
            "element": "Alaska",
            "subElements": [
                "Bascom"
            ],
            "active" : false
        },
        {
            "element": "Connecticut",
            "subElements": [],
            "active" : false
        },
        {
            "element": "Wisconsin",
            "subElements": [
                "Oretta",
                "Konterra",
                "Guthrie"
            ],
            "active" : false
        },
        {
            "element": "Nebraska",
            "subElements": [
                "Jennings",
                "Harviell",
                "Alfarata",
                "Bluffview",
                "Escondida"
            ],
            "active" : false
        },
        {
            "element": "Georgia",
            "subElements": [],
            "active" : false
        }
    ]
    
    const [list, setList] = useState(data);
    
    const handleClick = (index) => {
        
        let newList = list.map((item, i) => {
            // console.log('index que viene de funcion' + index +' index de map nuevo '+ i)
            if(index == i) {
                item.active = !item.active
            }
    
            return item
        })
    
        setList(newList)
    }
    return (
        <ul>
            {list.map((item, index) =>
                <Item key={index} index={index} item={item} onClick={() => handleClick(index)}/>)
            }
        </ul>

    );
}



export default List