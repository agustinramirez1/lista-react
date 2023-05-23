import React from 'react'

const SubElements = ({ item, index, subIndexActivo, setSubIndexActivo }) => {
    const active = (index == subIndexActivo) ? true : false
    const color = (active == true )? 'text-success' : ''
    const handleClick = () => {
        setSubIndexActivo(index)
    }
    return (
        <li key={index}>
            <button className={'btn ' + color} onClick={handleClick}>{item}</button>
        </li>
    )
}

export default SubElements