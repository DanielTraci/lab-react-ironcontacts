import React from 'react'

function ContactDetail ({contact, onDelete}) {
    const {name, pictureUrl, popularity, id} = contact
    return (
        <div>
            <img src={pictureUrl} height='50px'/>
            <h2>{name}</h2>
            <h2>{popularity}</h2>
            <button onClick={() => {onDelete(id)}}>Delete</button>
        </div>
    )
}

export default ContactDetail
