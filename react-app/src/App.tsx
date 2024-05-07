import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisbility] = useState(false);

  return (
    <div>
      <Alert onClose={() => setAlertVisbility(false)}>
        Hello <span>World</span>
      </Alert>
      {alertVisible && (
        <Alert onClose={() => setAlertVisbility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisbility(true)}>My Button</Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
