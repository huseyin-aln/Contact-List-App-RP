import { useState, useEffect } from "react"

import Form from "./Form/Form"
import List from "./List/List"

const Contacts = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);

  }, [contacts])


  return (
    <div>
        <List />
        <Form addContact={setContacts} contacts= {contacts}/>
    </div>
  )
}

export default Contacts