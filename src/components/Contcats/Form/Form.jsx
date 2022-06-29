import { useState } from "react";

const Form = ({addContact, contacts}) => {

  const [form, setForm] = useState ({fullname: "", phone_number: ""});

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  };
   
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form])

    setForm({fullname: "", phone_number: ""})
    console.log(form);

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

      <div>
        <button>Add</button>
      </div>
    </form>
  )
}

export default Form;