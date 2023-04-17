import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/ListGroup";
import Button from "./components/Button/Button";
import DismissingAlert from "./components/DismissingAlert";
import { useState } from "react";
import ListGroupWithVanilaCSS from "./components/ListGroup/ListGroupWithVanilaCSS";
import ListGroupWithStyledCSS from "./components/ListGroup/ListGroupWithStyledComponent";
import LikeButton from "./components/LikeButton/LikeButton";

function App() {
  let items = ["Delhi", "Bengaluru", "Mumbai", "Chennai", "Kolkata"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  let setAlertPopup = "hide";

  const [showAlertPopup, setShowAlert] = useState(false);

  return (
    <div>
      <LikeButton onClick={() => console.log("Clicked")}></LikeButton>
      <ListGroupWithVanilaCSS
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroupWithVanilaCSS>
      <ListGroupWithStyledCSS
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroupWithStyledCSS>

      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}

      {/* <Alert>
        Hello{" "}
        <span>
          <b>World</b>
        </span>
      </Alert>
      <DismissingAlert
        showAlertPopup={showAlertPopup}
        closeAlert={() => setShowAlert(false)}
      ></DismissingAlert>
      <Button color="danger" buttonClicked={() => setShowAlert(true)}>
        My Button
      </Button> */}
    </div>
  );
}

export default App;
