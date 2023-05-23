import React, { useState } from 'react'
import SubElements from './SubElements'

//Item viene del padre que en este caso es List

const Item = ({ index, item, indexActivo, setIndexActivo }) => {
    const { element, subElements } = item  //Se descompone List por sus items que se trajo del mismo
    const [subIndexActivo, setSubIndexActivo] = useState(null)

    const active = (index == indexActivo) ? true : false
    const background = (active == true) ? 'bg-primary-subtle' : ''
    const color = (active == true) ? 'text-primary' : ''
    const clase = (subElements.length > 0) ? background : color

    const handleClick = () => {
        if (active == true) {
            setIndexActivo(null)
            setSubIndexActivo(null)
        } else {
            setIndexActivo(index)
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