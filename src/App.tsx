// import { useState } from 'react';
// import Alert from './components/Alert';
// import Button from './components/Button';
import './App.css';
//import ListGroup from './components/ListGroup';
import { BsFillCalendarFill } from 'react-icons/bs';

function App() {
  let items = [
    'Cape Town',
    'Johannesburg',
    'Pretoria',
    'Durban',
    'Bloemfontein',
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return <BsFillCalendarFill color="red" size="40px" />;
  // return (
  //   <div>
  //     <ListGroup
  //       heading="Cities"
  //       items={items}
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );

  // const [alertVisible, setAlertVisibility] = useState(true);

  // return (
  //   <div>
  //     {alertVisible && (
  //       <Alert onClose={() => setAlertVisibility(false)}>
  //         <strong>Hello</strong> World!!!
  //       </Alert>
  //     )}
  //     <Button color={'primary'} onClick={() => setAlertVisibility(true)}>
  //       Click Me!
  //     </Button>
  //   </div>
  // );
}
export default App;
