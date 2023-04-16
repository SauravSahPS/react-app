import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Delhi", "Bengaluru", "Mumbai", "Chennai", "Kolkata"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
