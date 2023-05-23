import React from 'react'

const Item =({item, index, onClick}) => {
    const {element, subElements, active} = item
    
  return (
    <li >
       <button className='btn ' onClick={onClick}>{element}{subElements.length > 0 && (<span className='bi bi-caret-right'>  </span>)}</button> 
        { (subElements && active == true) && (
            <ul>
                {subElements.map((item, index )=>
                    <li key={index}>
                        {item}
                    </li>
                    )}
            </ul>
        )

        }
    </li>
  )
}

export default Item