import { useState } from "react";
import Message from "./Message";
import  Alert  from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGrpup";
import './App.css';

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

// function App() {
//   const [isVisibale, setAlertVisiblity] = useState(false);
//   const [isApproved, setApporved] = useState(true);
//    let count = 0;
//   const handleClick = () => {
//      setAlertVisiblity(true);
//      count++;
//      console.log(isVisibale);
//   }
//     return ( <div> 
//       {/* { alertVisible && <Alert onClose={() => setAlertVisiblity(false)} >Welcome To My Alert</Alert> } */}
//       <Button onClick={handleClick} color="dark" >Karm</Button> 
//       </div> );
// }



// function App() {
//   // const [firstName, setFirstName] = useState('');
//   // const [lastName, setLastName] = useState('');
//   const [person, setPerson] = useState({
//     firstName: '',
//     lastName: ''
//   });
//   const fullName = person.firstName + ' ' + person.lastName;
//   const [isLoading, setIsLoading] = useState(false);
//   return ( <div>
//     {fullName }
//   </div> );
// }

// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "Karm",
//     }
//   });

//   const handleClick = () => {
//     setGame({
//       ...game,
//       player: {
//         ...game.player,
//         name: "Karmjeet Singh",
//       }
//     })
//   }

//   return ( <div> 
//     <h1> {game.player.name} </h1>
//     <button onClick={handleClick} >Change Name</button>
//      </div> )
// }



function App() {
  const [pizza, setPizza] = useState({
    name: "Special Pizza",
    price: 100,
    toppings: ["Cheese", "Tomato", "Onion"],
    size: "Large"
  });

  // handle change
  const handleChange = (e: any) => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Mushroom']});
  };

  return ( 
    <div>
      <h1> {pizza.name} </h1>
      <h2> {pizza.price} </h2>
      <h3> {pizza.size} </h3>
      <ul>
        {pizza.toppings.map((topping, index) => (
          <li key={index}> {topping} </li>
        ))}
      </ul>
      <button onClick={handleChange} >Change</button>
    </div>

   );
}

export default App;