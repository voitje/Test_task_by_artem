import React from 'react';
import { Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import DropDown from "./components/DropDown";
import FormAdd from "./components/FormAddProjectComponent";
import store from "./store/createStore";
import Projects from "./components/ProjectComponent";
import TableOfTask from "./components/TableOfTaskComponent";

const App: React.FC = () => {
  return (
      <Provider store={store}>
        <div className="App">
          <FormAdd/>
          <Projects/>
          <TableOfTask/>
        </div>
      </Provider>
  )
};

export default App;
