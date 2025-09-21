import { useState } from 'react'
import './App.css'
import Entry_List from "./EntryList.jsx";
import {entries} from "./data.js";

function App() {
    // eslint-disable-next-line no-empty-pattern
  const [] = useState(0)

  return (
    <div>
      <h1>Shotty Bitch Work!</h1>
      <Entry_List entries={entries}/>
    </div>
  )
}

export default App
