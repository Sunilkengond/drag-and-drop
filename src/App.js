import { useState } from 'react';

import { Main } from './App.styles'

import Card from './components/card/Card';
import Button  from './components/button/Button';
import SidePanel from './components/sidePanel/SidePanel';


function App() {
  const [arr, setArr] = useState([1, 2, 3, 4 ,5, 6, 7, 8, 9]);
  const [widgetList, setWidgetList] = useState([10, 11, 12]);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(null);


  const handleclick = () => { setIsOpen(!isOpen) };
  const OnDropHandle = (e) => {
    setArr([...arr, active]);
    console.log(active)
    const ActiveIndex = widgetList.indexOf(active);
    widgetList.splice(ActiveIndex, 1)
    setWidgetList(widgetList)

  };

  
  
  return (
    <>
      <span>Drag and Drop feature</span>
      <Button handleclick={handleclick} label={'+ Customize Widgets'}/>
      <Main id="App"
       onDrop={OnDropHandle}
       onDragOver={e => e.preventDefault()}
       >
        {arr.map((index) => <Card key={index} index={index} />)}
      </Main>
      <SidePanel {...{isOpen, setIsOpen, setActive, widgetList}}  />
    </>
  );
}

export default App;
