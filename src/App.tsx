import React from 'react';
import { Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import DropDown from "./components/DropDown";
import FormAdd from "./components/FormAddProjectComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <FormAdd/>
    </div>
  )
};

export default App;
