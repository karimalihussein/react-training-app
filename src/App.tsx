import Message from "./Message";
import ListGroup from "./components/ListGroup";


function App() {
  let items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Phoenix",
    "San Antonio",
    "San Diego",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return <div> <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}  /> </div>
}

export default App;