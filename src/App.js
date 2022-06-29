import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element= {<ItemListContainer greet="Catalogo"/>}/>
            <Route path="/detail/:id" element= {<ItemDetailContainer greeting= "DETALLE DEL PRODUCTO"/>}/>
            <Route path="/category/:categoryId" element= {<ItemListContainer greet="Categoria"/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
