import React from 'react';
import { Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import DropDown from "./components/DropDown";
import FormAdd from "./components/FormAddProjectComponent";
import store from "./store/createStore";

const App: React.FC = () => {
  return (
      <Provider store={store}>
        <div className="App">
          <FormAdd/>
        </div>
      </Provider>
  )
};

export default App;
