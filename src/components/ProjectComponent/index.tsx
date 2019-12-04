import * as React from 'react';
import { connect} from "react-redux";
import {IState} from "../../store/createStore";
import {IProject, IProjects} from "../../store/project/types";
import './style.scss'


interface IProjectsProps {
    projects: IProject[];
}

const Projects: React.FC<IProjectsProps> = (props) => {
    console.log('FC', props.projects)
    return (
        <div>
            {props.projects.map((item) =>
                <div className="project">
                    <div className="project__name">{item.name}</div>
                    <div className="project__description">{item.description}</div>
                    <div className="project__link">{item.link}</div>
                </div>)}
        </div>
    )
};

const mapStateToProps = (state: IState) => ({
   projects: state.projects,
});

export default connect(mapStateToProps)(Projects)