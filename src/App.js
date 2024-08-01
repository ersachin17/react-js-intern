import { useState} from 'react';
import './App.css';
import Fillters from './Fillters.js';
function App() {

  const data = [
    {id:1, name:"Date of ragistration"},
    {id:2, name:"Vendor of source"},
    {id:3, name:"Rating"},
    {id:4, name:"Status"},
    {id:5, name:"Type of Business"},
    {id:6, name:"Loaction"},
    {id:7, name:"Assign To"}
  ]
  const [visible, setVisible] = useState(false)
  const [filterdata, setFilterdata] = useState(data)
  return (
    <div className="App">
      <button style={{cursor:"pointer"}} onClick={()=>setVisible(!visible)}>Fillters</button>
      {!visible?(null):(<Fillters filterdata={filterdata} setFilterdata={setFilterdata}/>)}
    </div>
  );
}

export default App;
