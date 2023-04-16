import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  let items = ["Delhi", "Bengaluru", "Mumbai", "Chennai", "Kolkata"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button
        color="danger"
        buttonClicked={() => console.log("Button clicked ")}
      >
        My Button
      </Button>
      <Alert>
        Hello{" "}
        <span>
          <b>World</b>
        </span>
      </Alert>
    </div>
  );
}

export default App;
