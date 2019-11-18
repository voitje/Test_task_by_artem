import * as React from 'react';
import { connect} from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import './style.scss';
import {AppState} from "../../store/reducer/rootReducer";
import {createProject} from "../../store/action/projectActions";

interface IFormAddState {
  name: string,
  description: string,
  link: string,
}

class FormAdd extends React.Component<any, IFormAddState> {

  state: IFormAddState = {
    name: '',
    description: '',
    link: '',
  };

  handleFormChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({name: e.target.value});
  };

  handleFormChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({description: e.target.value});
  };

  handleFormChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({link: e.target.value});
  };

  render() {
    console.log(this.state);
    return (
        <div className='form-add'>
            <div className='form-add_name'>
              <span className='form-add_name_text'>NAME:</span>
              <input
                  className='form-add_name_input'
                  type="text"
                  placeholder="Enter name..."
                  onChange={this.handleFormChangeName}/>
            </div>
            <div className='form-add_description'>
              <span className='form-add_description_text'>DESCRIPTION:</span>
              <input
                  className='form-add_description_input'
                  type="text" placeholder="Enter name..."
                  onChange={this.handleFormChangeDescription}
              />
            </div>
            <div className='form-add_link'>
              <span className='form-add_link_text'>LINK:</span>
              <input
                  className='form-add_link_input'
                  type="text" placeholder="Enter name..."
                  onChange={this.handleFormChangeLink}
              />
            </div>
            <button  className="form-add_button-add"> Add project</button>
        </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
    projects: state.project.projects,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators(
        {
            createProject
        },
        dispatch
    );

export default FormAdd;
