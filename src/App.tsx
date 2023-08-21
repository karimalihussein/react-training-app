import { useState } from "react";
import Message from "./Message";
import  Alert  from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";


// function App() {
//   let items = [
//     "New York",
//     "Los Angeles",
//     "Chicago",
//     "Houston",
//     "Philadelphia",
//     "Phoenix",
//     "San Antonio",
//     "San Diego",
//   ];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return <div> <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}  /> </div>
// }


// function App() {
//   return (<div> <Alert > <h1>hh</h1> </Alert> </div>);
// }

function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);
    return ( <div> 
      { alertVisible && <Alert onClose={() => setAlertVisiblity(false)} >Welcome To My Alert</Alert> }
      <Button onClick={() => setAlertVisiblity(true) } color="dark" >Karm</Button> 
      </div> );
}

export default App;