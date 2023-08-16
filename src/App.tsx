import './App.css';
import Private from './auth/Private';
import Pro from './auth/Pro';
import ArrayofObjProps from './components/ArrayofObjProps';
import Button from './components/Button';
import EventProps from './components/EventProps';
import ExtractingCompProps from './components/ExtractingCompProps';
import GenericProps from './components/GenericProps';
import Heading from './components/Heading';
import LimitedProps from './components/LimitedProps';
import OptinalProps from './components/OptinalProps';
import PremmitiveProps from './components/PremmitiveProps';
import ReactCompAsProps from './components/ReactCompAsProps';
import States from './components/States';
import StatusProps from './components/StatusProps';
import StyleProps from './components/StyleProps';
import Tost from './components/Tost';
import UseReducer from './components/UseReducer';
import Box from './context/Box';
import { ThemeContextProvider } from './context/ThemeContext';
import DomRef from './ref/DomRef';
import MutableRef from './ref/MutableRef';

function App() {
  const data={
    name:"deepak",
    from:"haryana",
    phone:702768
  }
  const users=[
    {
      name:"deepak",
      from:"haryana",
      phone:702768
    },
    {
      name:"deepak",
      from:"haryana",
      phone:702768
    },
    {
      name:"deepak",
      from:"haryana",
      phone:702768
    }
  ]
  const handelClickButton=(event:React.MouseEvent<HTMLButtonElement>,id:number)=>{
    console.log(`button is clicked ${id}`,event);
  }
  const handelOnChangeInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(event.target.value)
   }
 
  return (
    <div className="App">
      <h1>Type Script </h1>
      <h5>Data Type</h5>
      <PremmitiveProps str='deepak' num={1} flag={false} data={data} />
      <h5>Array of obj props</h5>
      <ArrayofObjProps users={users}/>
      <StatusProps status={3}/>
      <Heading>This is Heading</Heading>
      <ReactCompAsProps>
      <Heading>Passing Heading Componet</Heading>
      </ReactCompAsProps>
      <OptinalProps name='this is name'/>
      <EventProps handelClickButton={handelClickButton} handelOnChangeInput={handelOnChangeInput} />
      <StyleProps style={{background:"red" , padding:"40px", color:"white", textAlign:"center"}}/>
      <States/>
      <UseReducer/>
      <ThemeContextProvider>
       <Box/>
      </ThemeContextProvider>
      <DomRef/>
      <MutableRef/>
      
      <Private  componet={Pro} isLogin={true}/>
      <GenericProps items={[1,2,3]} onClick={(v)=>console.log(v)} />
      <LimitedProps value={5} isPositive />
      <Tost position="center"/>
      <Button varient="primary" onClick={()=>console.log('clicked')}>This is button</Button>
      <ExtractingCompProps name="Deepak" age={1223}/>
    </div>
  );
}

export default App;
