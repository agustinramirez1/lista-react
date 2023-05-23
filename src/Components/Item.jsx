import React, { useState } from 'react'
import SubElements from './SubElements'

const Item = ({ index, item, indiceActivo, setIndiceActivo }) => {
    const { element, subElements } = item
    const [subIndexActivo, setSubIndexActivo] = useState(null)

    const active = (index == indiceActivo) ? true : false
    const background = (active == true) ? 'bg-primary-subtle' : ''
    const color = (active == true) ? 'text-primary' : ''
    const clase = (subElements.length > 0) ? background : color

    const handleClick = () => {
        if (active == true) {
            setIndiceActivo(null)
            setSubIndexActivo(null)
        } else {
            setIndiceActivo(index)
        }
    }

    return (
        <li >
            <button className={'btn ' + clase} onClick={handleClick}>
                {element}
                {subElements.length > 0 && (<span className='bi bi-caret-right'></span>)}
            </button>

            {(subElements && active == true) && (
                <ul>
                    {subElements.map((item, index) =>
                        <SubElements
                            key={index}
                            index={index}
                            item={item}
                            subIndexActivo={subIndexActivo}
                            setSubIndexActivo={setSubIndexActivo} />
                    )}
                </ul>
            )

            }
        </li>
    )
}

export default Item