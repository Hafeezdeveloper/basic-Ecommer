import logo from './logo.svg';
import DrawerAppBar from './components/componentuperr/NavBar2'
import ResponsiveAppBar from './components/header'
import Card from './cardComponent/card'
import './App.css';

function App() {
  return (
    <div >
      <ResponsiveAppBar  />
      {/* <div style={{margin:'155px'}}> */}
      <DrawerAppBar />
      {/* </div> */}
      <Card />
    </div>
  );
}

export default App;
