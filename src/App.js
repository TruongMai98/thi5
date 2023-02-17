import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import List from './components/List';
import Create from './components/Create';
import Edit from './components/Edit';
import Delete from './components/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './components/View';

function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<List />} />
        <Route path={`/delete/:productId`} element={<Delete />} />
        <Route path={`/view/:productId`} element={<View />} />
        <Route path={"/create"} element={<Create />} />
        <Route path={`/edit/:productId`} element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
