
import './App.css';
import Basic from './components/Basic';
import Button from './components/Button';
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import TravelRoute from './components/TravelRoute';
import Data from "./data";

function App() {
  const cards = Data.map(item =>{
    return <Cards 
              key={item.id}
              img={item.image}
              title={item.title}  
              airway={item.airway}
              time={item.time}
              GMT={item.GMT}
              price={item.price}
              
              />
            
  })
  return (
    <div className="App">
      
        <NavBar
        name="Lisa"
        companyName="Rahisi"
        />
        <SearchBar/>
        <Basic/>
        <div className='card-scroller' onClick={()=>{
          console.log('I got clicked');
        }}>
        {cards}
        </div>
        <Button/>
        {/* <TravelRoute/> */}
         <Navigation/> 
        
    </div>

  );
}

export default App;
