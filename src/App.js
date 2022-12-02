import './App.css';
import Schedule from './components/schedule';
import OfferCard from './components/offerCard';

function App() {
  return (
    <div className="App">
      <Schedule date="2022-09-03" />
      {/* <OfferCard 
      duration={30}
      name="Test"
      startTime="time debut"
      coach={{name: 'Coach', img: "https://assets.staging.bsport.io/user/F481202C-721E-404B-B47B-013F1A2B7084.jpg"}}
      location="Bob"
      /> */}
    </div>
  );
}

export default App;
