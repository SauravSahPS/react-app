import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import DismissingAlert from "./components/DismissingAlert";
import { useState } from "react";

function App() {
  let items = ["Delhi", "Bengaluru", "Mumbai", "Chennai", "Kolkata"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  let setAlertPopup = "hide";

  const [showAlertPopup, setShowAlert] = useState(false);

  return (
    <div>
      <DismissingAlert
        showAlertPopup={showAlertPopup}
        closeAlert={() => setShowAlert(false)}
      ></DismissingAlert>
      <Button color="danger" buttonClicked={() => setShowAlert(true)}>
        My Button
      </Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

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
