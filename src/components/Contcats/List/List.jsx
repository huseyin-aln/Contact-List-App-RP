import { useState } from "react";

const List = ({contacts}) => {

  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
        return item[key].toString().toLowerCase().includes(filterText.toLowerCase());
    });
  });

  return (
    <div>
      
      <input type="text" placeholder="Filter contact" value={filterText} onChange={(e) => setFilterText(e.target.value)}
        />

      <ul>
        {filtered.map((contact, i) => (
          <li key={i}>{contact.fullname} </li>
        ))}
      </ul>
    </div>
  )
}

export default List