import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const heading = "Cities";

  const items: string[] = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleButtonClick = () => {
    setAlertVisible(true);
  };

  const handleCloseClick = () => {
    setAlertVisible(false);
  };

  return (
    <div>
      <Alert visible={alertVisible} onCloseClick={handleCloseClick}>
        <span>This is just a refresh tutorial in how to work with React!</span>
      </Alert>
      <ListGroup
        heading={heading}
        items={items}
        onSelectItem={handleSelectItem}
      />
      <Button onButtonClick={handleButtonClick}>More info</Button>
    </div>
  );
}

export default App;
