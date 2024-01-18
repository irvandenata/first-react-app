import logo from './logo.svg';
import './App.css';



const data = [
  {
    id: 1,
    name: 'John',
    age: 20,
  },
  {
    id: 2,
    name: 'Jane',
    age: 21,
  },
  {
    id: 3,
    name: 'Joe',
    age: 22,
  },
]

const listItems = data.map((item) =>{
  return {
    key: item.id,
    value: item.name + ' is ' + item.age + ' years old.'
  }
})


function ListItem(props) {
  return <li>{props.value}</li>;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {listItems.map((item) => <ListItem key={item.key} value={item.value} />)}
    </div>
  );
}

export default App;
