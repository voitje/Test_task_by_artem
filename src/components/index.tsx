import * as React from 'react';

const style = require('./style.scss');

export interface DropDownState {
    dropDownItem: string,
    listOpen: boolean,
}

class DropDown extends React.Component<any, DropDownState>{

    state: DropDownState = {
        dropDownItem: '',
        listOpen: false,
    };

    toggleList = () => {
        this.setState(prevState => ({listOpen: !prevState.listOpen}))
    };

    render() {
        return (
            <div className="dropdown">
                <div className="dropdown_header" onClick={this.toggleList}>
                    WHAT U ASS
                </div>
                {this.state.listOpen
                     ?
                    <ul className="dropdown_list">
                        <li className="dropdown_list_item">впередконец</li>
                        <li className="dropdown_list_item">назадконец</li>
                        <li className="dropdown_list_item">иос</li>
                    </ul>
                    : null
                }
            </div>
        )
    }
}

export default DropDown;