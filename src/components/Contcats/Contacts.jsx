import { useState, useEffect } from "react"

import "./Contacts.css"

import Form from "../Form/Form"
import List from "../List/List"

const Contacts = () => {

  const [contacts, setContacts] = useState([
    {
      fullname: "Joseph",
      phone_number: "123123"
    }, {
      fullname: "Albert",
      phone_number: "456456"
    }, {
      fullname: "Suzan",
      phone_number: "234789"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])


  return (
    <div className="container">
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts= {contacts}/>
    </div>
  )
}

export default Contacts