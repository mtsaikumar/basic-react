import './App.css';
import SaiComponent from './components/SaiComponent';
import SrinivasComponent from './components/SrinivasComponent';
import DanishComponent from './components/DanishComponent';
import RajeshComponent from './components/RajeshComponent';
import GovardhanComponent from './components/GovardhanComponent';
import VarmaComponent from './components/VarmaComponent';
import HemaComponent from './components/HemaComponent';

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
