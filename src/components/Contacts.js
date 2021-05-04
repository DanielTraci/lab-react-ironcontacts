import React, { Component } from 'react'
import data from "../contacts.json"
import ContactDetail from "./ContactDetail"

class Contacts extends Component {
    state = {
        contacts: data.slice(0,5)
    }

    handleAdd = () => {
        let randomIndex = Math.floor(Math.random() * data.length)
        let elem  = data[randomIndex]
        this.setState({
            contacts: [elem, ...this.state.contacts]
        })
    }

    handleSortPop = () => {
        const {contacts} = this.state
        let clonedContact = JSON.parse(JSON.stringify(contacts))
        clonedContact.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return -1
            }
            else if(a.popularity < b.popularity) {
                return 1
            }
            else {
                return 0
            }
        })
        this.setState({
            contacts: clonedContact
        })
    }
    handleSortName = () => {
        const {contacts} = this.state
        let clonedContact = JSON.parse(JSON.stringify(contacts))
        clonedContact.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            else if(a.name < b.name) {
                return -1
            }
            else {
                return 0
            }
        })
        this.setState({
            contacts: clonedContact
        })
    }

    handleDelete = (anId) => {
        const {contacts} = this.state
        let filteredContacts = contacts.filter((singleActor) => {
            return singleActor.id !== anId
        })
        this.setState({
            contacts: filteredContacts
        })
    }


    render() {
        const {contacts} = this.state
        return (
            <div>
            <button onClick={this.handleAdd}>Add Random Contact</button>
            <button onClick={this.handleSortPop}>Sort by popularity</button>
            <button onClick={this.handleSortName}>Sort by name</button>
               { 
                contacts.map((singleContact, index) => {
                    return <ContactDetail key={index} contact={singleContact} onDelete={this.handleDelete} />
                    })
                }
            </div>
        )
    }
}


export default Contacts
