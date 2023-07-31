import './App.css';
import Banner from './Banner/Banner'
import Exhibit from './Exhibit/Exhibit';
import LatencyDisplay from './LatencyDisplay';

function App() {
  return (
    <div>
      <Banner title="Sextant App"/>
      <Exhibit title="Exhibit"/>
      <LatencyDisplay />
    </div>
  );
}

export default App;
