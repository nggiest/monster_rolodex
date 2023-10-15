import './App.css';
import { useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return(
    <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
       
        <SearchBox 
            className='monsters-search-box'
            onChangeHandler = {onSearchChange} 
            placeholder='search-monsters' 
        />
        {/* <CardList monsters={filteredMonster}/> */}
      </div>
  )
}
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters : [],
//       searchField: ''
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => (response.json()))
//       .then((users)=> this.setState(()=> {
//         return {monsters :users }
//       }
//       )) 
//   }

//   onSearchChange = (event) => {
    
//   } 

//   render() {
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
    
//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//      });

    
//     return (
      
//     );
//   }
// }

export default App;
