import './App.css';
import SaiComponent from './Components/SaiComponent';
import SrinivasComponent from './Components/SrinivasComponent';
import DanishComponent from './Components/DanishComponent';
import RajeshComponent from './Components/RajeshComponent';
import GovardhanComponent from './Components/GovardhanComponent';
import VarmaComponent from './Components/VarmaComponent';
import HemaComponent from './Components/HemaComponent';

function App() {
  return (
    <div className="App">
      <h1>
          Welcome to Learning React with friends.
      </h1>     
      <SaiComponent ></SaiComponent>
      <br/>
      <SrinivasComponent ></SrinivasComponent>
      <br/>
      <DanishComponent ></DanishComponent>
      <br/>  
      <RajeshComponent ></RajeshComponent>
      <br/>
      <GovardhanComponent ></GovardhanComponent>
      <br/>
      <VarmaComponent ></VarmaComponent>
      <br/>
      <HemaComponent ></HemaComponent>
      <br/>
    </div>
  );
}

export default App;
