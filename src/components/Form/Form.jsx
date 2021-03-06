import { useState, useEffect } from "react";

import "./Form.css";

const initialFromValues = {fullname: "", phone_number: ""};

const Form = ({addContact, contacts}) => {

  const [form, setForm] = useState(initialFromValues);

  useEffect(() => {
    setForm(initialFromValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  };
   
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form])

  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text"
         name="fullname" 
         placeholder="Full Name" 
         value={form.fullname} 
        onChange={onChangeInput}/>
      </div>

      <div>
        <input type="text" 
        name="phone_number" 
        placeholder="Phone Number" 
        value={form.phone_number} 
        onChange={onChangeInput}/>
      </div>

      <div className="btn-container">
        <button>Add</button>
      </div>
    </form>
  )
}

export default Form;