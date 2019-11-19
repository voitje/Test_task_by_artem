import * as React from 'react';
import { connect} from 'react-redux';
import store, {IState} from '../../store/createStore'
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import './style.scss';
import {createProject} from "../../store/action/projectActions";
import {IProject, ProjectActionTypes} from "../../store/project/types";

interface IFormAddState {
  name: string,
  description: string,
  link: string,
}

 interface IFormProps {
    project: IProject;
    test: (newProject:IProject) =>ProjectActionTypes
}

class FormAdd extends React.Component<IFormProps, IFormAddState> {
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

  addNewProject = () => {
      let newProject : IProject = {
          name: this.state.name,
          description: this.state.description,
          link: this.state.link,
      };
      this.props.test(newProject);
      this.setState({name: '', description: '', link: ''})
  };

  render() {
    console.log(this.props.project);
    return (
        <div className='form-add'>
            <div className='form-add_name'>
              <span className='form-add_name_text'>NAME:</span>
              <input
                  value={this.state.name}
                  className='form-add_name_input'
                  type="text"
                  placeholder="Enter name..."
                  onChange={this.handleFormChangeName}/>
            </div>
            <div className='form-add_description'>
              <span className='form-add_description_text'>DESCRIPTION:</span>
              <input
                  value={this.state.description}
                  className='form-add_description_input'
                  type="text"
                  placeholder="Enter description..."
                  onChange={this.handleFormChangeDescription}
              />
            </div>
            <div className='form-add_link'>
              <span className='form-add_link_text'>LINK:</span>
              <input
                  value={this.state.link}
                  className='form-add_link_input'
                  type="text"
                  placeholder="Enter link..."
                  onChange={this.handleFormChangeLink}
              />
            </div>
            <button type="submit" onClick={this.addNewProject} className="form-add_button-add"> Add project</button>
        </div>
    )
  }
}

const mapStateToProps = (state: IState) => ({
    project: state.project,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators(
        {
            test: createProject
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
