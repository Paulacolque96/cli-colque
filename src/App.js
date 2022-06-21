import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greet="Bienvenido, bienvenida"/>
        <ItemDetailContainer greeting= "DETALLE DEL PRODUCTO"/>
      </header>
    </div>
  );
}

export default App;
