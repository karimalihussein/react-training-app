import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGrpup";
import MessageComponent from "./components/Message";
import "./App.css";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

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

// function App() {
//   const [pizza, setPizza] = useState({
//     name: "Special Pizza",
//     price: 100,
//     toppings: ["Cheese", "Tomato", "Onion"],
//     size: "Large"
//   });

//   // handle change
//   const handleChange = (e: any) => {
//     setPizza({...pizza, toppings: [...pizza.toppings, 'Mushroom']});
//   };

//   return (
//     <div>
//       <h1> {pizza.name} </h1>
//       <h2> {pizza.price} </h2>
//       <h3> {pizza.size} </h3>
//       <ul>
//         {pizza.toppings.map((topping, index) => (
//           <li key={index}> {topping} </li>
//         ))}
//       </ul>
//       <button onClick={handleChange} >Change</button>
//     </div>

//    );
// }

// function App() {
//     const [cart, setCart] = useState({
//       discount: .1,
//         items: [
//           { id: 1, name: "Pizza", price: 100, qty: 1 },
//           { id: 2, name: "Burger", price: 50, qty: 2 },
//           { id: 3, name: "Coke", price: 20, qty: 1 },
//         ]
//     });

//     const handleClick = (id: number) => {
//       setCart({ ...cart, items: cart.items.map((item) => item.id == id ?  { ...item, qty: item.qty + 1 } : item) });
//     }

//     return (
//       <div>
//         <h1>Cart</h1>
//         <ul>
//           {cart.items.map((item) => (
//             <li key={item.id}>
//               {item.name} - {item.qty}
//               <button onClick={() => handleClick(item.id)} >+</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <MessageComponent />
//             <MessageComponent />
//             <MessageComponent />
//         </div>
//     )
// }

// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, name: "Bug 1", isClosed: false },
//     { id: 2, name: "Bug 2", isClosed: false },
//     { id: 3, name: "Bug 3", isClosed: false },
//     { id: 4, name: "Bug 4", isClosed: true },
//   ]);
//   // handle close bug
//   const handleClose = (id: number) => {
//     setBugs(
//       bugs.map((bug) => (bug.id === id ? { ...bug, isClosed: true } : bug))
//     );
//   };

//   return (
//     <div>
//       <h1>Bugs</h1>
//       <ul>
//         {bugs.map((bug) => (
//           <li key={bug.id}>
//             {bug.name} - {bug.isClosed ? "Closed" : "Open"}
//             {!bug.isClosed && (
//               <button onClick={() => handleClose(bug.id)}>Close</button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   const [tags, setTags] = useState(["React", "Angular", "Vue"]);
//   // handle add tag
//   const handleAddTag = (tag: string) => {
//     setTags([...tags, tag]);
//   };

//   return (
//     <div>
//       <h1>Tags</h1>
//       <ul>
//         {tags.map((tag, index) => (
//           <li key={index}>{tag}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         onKeyDown={(e) => e.key === "Enter" && handleAddTag(e.target.value)}
//       />
//     </div>
//   );
// }

// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, name: "Bug 1", isClosed: false },
//     { id: 2, name: "Bug 2", isClosed: false },
//     { id: 3, name: "Bug 3", isClosed: false },
//   ]);
//   const handleClose = () => {
//     setBugs(produce((draft) => {
//        const bug =  draft.find((bug) => bug.id === 1);
//        if (bug) bug.isClosed = true;
//     }));
//   };

//   return (
//     <div>
//         <h1>Bugs</h1>
//         <ul>
//             {bugs.map((bug) => (
//                 <li key={bug.id}>
//                     {bug.name} - {bug.isClosed ? "Closed" : "Open"}
//                     {!bug.isClosed && <button onClick={handleClose}>Close</button>}
//                 </li>
//             ))}
//         </ul>
//     </div>
//    )
// }

// function App() {
//   const [customer, setCustomer] = useState({
//     name: "John",
//     address: {
//       city: "New York",
//       country: "USA",
//       zipCode: 2003,
//     },
//   });
//   const handleClick = () => { setCustomer({...customer, address: {...customer.address, city: 'Los Angeles'}}); };

//   return ( <div> <h1> {customer.name} </h1> <h2> {customer.address.city} </h2> <button onClick={handleClick} >Change</button> </div> )
// }

// function App() {
//   const[cartItems, setCartItems] = useState(['React', 'Angular', 'Vue']);
//   return (
//     <div>
//         <NavBar cartItemsCount={cartItems.length} ></NavBar>
//         <Cart cartItems={cartItems} onClear={() => setCartItems([]) } ></Cart>
//     </div>
//    )
// }

// function App() {
//   const [drink, setDrink] = useState({
//     title: "AMERICANO",
//     price: 100,
//   });
//   const handleClick = () => {
//     setDrink({ ...drink, price: drink.price + 10 });
//   };

//   return (
//     <div>
//       <h1> {drink.title} </h1>
//       <h2> {drink.price} </h2>
//       <button onClick={handleClick}>Change</button>
//     </div>
//   );
// }


function App() {
    return (
        <div> <ExpandableText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ut nihil vero! Labore saepe aut illum aspernatur vel dolor quas nostrum earum nesciunt, atque sunt tempore ex magni eos nisi.
          </ExpandableText>  </div>
    )
}


export default App;
