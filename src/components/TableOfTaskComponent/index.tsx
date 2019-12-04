import * as React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import ContentEditable from 'react-contenteditable'
import {FormEvent, useState} from 'react';
import {FormEventHandler} from "react";

let countRow = 0;


interface ICell {
    text: string
}

// @ts-ignore
const TableOfTask : React.FC<>= () => {

    const [value, setValue] = useState<string>('');
    const [array, setArray] = useState<ICell[]>([]);
    let arrayOfCell = value;
    const handleChange = (e: React.FormEvent<HTMLDivElement>) => {
        console.log('A', document.getElementsByTagName('tbody'));
        console.log(e.target)
        // @ts-ignore
        let table = document.getElementById("table-task")
            .getElementsByTagName('tbody')[0];

    };

    const addData = () => {
        const newArray: ICell[] = [...array, {text: value}];
        setArray(newArray);
        console.log('array', array)
    };

    const renderRow = () => {

        let test = [];
        for (let i = 0; i < 3; i++)
        {
            test.push(renderCell(false))
        }
        for (let i = 3; i < 8; i++)
        {
            test.push(renderCell(true))
        }
        return(
            <div className="divTableRow">
                {test.map((item) => item)}
            </div>
        )
    };

    const renderCell  = (renderTwo : boolean) => {
        if (renderTwo) {
            return (
                <div className='zhopa' style={{"display": "table-cell"}}>
                    <div
                        style={{"display": "inline-flex",
                            width:'100%', height: '100%', border: '1px dashed'}}
                    >
                        <ContentEditable
                            id="editableDiv"
                            style={{"flex-grow": "1"}}
                            html=''
                            className='value-input-pos'
                            onChange={handleChange}
                        />
                        <ContentEditable
                            id="editableDiv"
                            style={{"flex-grow": "1"}}
                            html=''
                            className='value-input-neg'
                            onChange={handleChange}
                        />
                    </div>
                </div>
            )
        }
        else {
            return (
                <ContentEditable
                    id="editableDiv"
                    style={{"display": "table-cell", "border": "1px dashed"}}
                    html=''
                    onChange={handleChange}
                />
            )
        }
    };

    const renderRow1 = () => {

        let test = [];
        for (let i = 0; i < 13; i++)
        {
            test.push(renderCell1())
        }
        return(
            <tr>
                {test.map((item) => <td>{item}</td>)}
            </tr>

        )
    };

// <ContentEditable
// id="editableDiv"
// style={{height: 'auto', width: '100%'}}
// html=''
// onChange={this.handleChange}
// />



    const renderCell1  = () => {
        return (
            <div className="pythonGovno" contentEditable/>
        )
    };

    const testHandle = (e: Event) => {
        console.log('AAA', e.target)
    }

    const addNewRow = () => {
        // @ts-ignore
        let table = document.getElementById("table-task")
            .getElementsByTagName('tbody')[0];
        // @ts-ignore
        let countTd = document.getElementById('subhead')
            .getElementsByTagName('td').length;
        let row = table.insertRow();
        let asd = React.createElement('div', {className: "pythonGovno",
             contentEditable: 'true'});
        for (let i = 0; i < countTd; i++) {
            let newDiv = document.createElement('div');
            newDiv.className = "pythonGovno";
            newDiv.id = i.toString();
            // @ts-ignore
            //newDiv.onChange = handleChange();

            newDiv.contentEditable = 'true';
            newDiv.addEventListener("input", (e) => {testHandle(e)});

            // @ts-ignore
            let cell = row.insertCell(i).appendChild(newDiv);
        }
    };

    const deleteLastRow = () => {
        // @ts-ignore
        document.getElementById('table-task').deleteRow(document.getElementsByTagName('tbody')[0]
            .getElementsByTagName('tr').length + 1);
    };


        return(
            <div>
            <div className="divTable">
                <div className="divTableBody">
                    <div className="divTableRow">
                        <div className="divTableCell">
                            <input className="input-cell-head" value="module"/>
                        </div>
                        <div className="divTableCell">
                            <input className="input-cell-head" value="name"/>
                        </div>
                        <div className="divTableCell">
                            <input className="input-cell-head" value="comment"/>
                        </div>
                        <div className="divTableCell">
                            <input className="input-cell-head" value="Designer"/>
                        </div>
                        <div className="divTableCell">
                            <input className="input-cell-head" value="Frontend"/>
                        </div>
                        <div className="divTableCell">
                            <input className="input-cell-head" value="Backend"/>
                        </div>
                        <div className="divTableCell">
                            <input className="input-cell-head" value="iOS"/>
                        </div>
                        <div className="divTableCell">
                            <input className="input-cell-head" value="Android"/>
                        </div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">&nbsp;</div>
                        <div className="divTableCell">&nbsp;</div>
                        <div className="divTableCell">&nbsp;</div>
                        <div className="divTableCell">&nbsp;</div>
                        <div className="divTableCell">
                            <div className="divTableCellPos">
                                <input className="input-pos" value="поз"/>
                            </div>
                            <div className="divTableCellNeg">
                                <input className="input-neg" value="нег"/>
                            </div>
                        </div>
                        <div className="divTableCell">
                            <div className="divTableCellPos">
                                <input className="input-pos" value="поз"/>
                            </div>
                            <div className="divTableCellNeg">
                                <input className="input-neg" value="нег"/>
                            </div>
                        </div>
                        <div className="divTableCell">
                            <div className="divTableCellPos">
                                <input className="input-pos" value="поз"/>
                            </div>
                            <div className="divTableCellNeg">
                                <input className="input-neg" value="нег"/>
                            </div>
                        </div>
                        <div className="divTableCell">
                            <div className="divTableCellPos">
                                <input className="input-pos" value="поз"/>
                            </div>
                            <div className="divTableCellNeg">
                                <input className="input-neg" value="нег"/>
                            </div>
                        </div>
                    </div>
                    {renderRow()}
                    {renderRow()}
                    {renderRow()}
                </div>
            </div>
                <div className="table-of-task">
                    <table id="table-task">
                        <thead>
                            <tr>
                                <th>module</th>
                                <th>name</th>
                                <th>comment</th>
                                <th colSpan={2}>designer</th>
                                <th colSpan={2}>Frontend</th>
                                <th colSpan={2}>Backend</th>
                                <th colSpan={2}>iOS</th>
                                <th colSpan={2}>Android</th>
                            </tr>
                            <tr id="subhead">
                                <td>a </td>
                                <td>a </td>
                                <td>a </td>
                                <td>пос</td>
                                <td>нег</td>
                                <td>пос</td>
                                <td>нег</td>
                                <td>пос</td>
                                <td>нег</td>
                                <td>пос</td>
                                <td>нег</td>
                                <td>пос</td>
                                <td>нег</td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                    <div className="buttons-action">
                        <input
                            className="button-add"
                            type="button"
                            value="+"
                            onClick={addNewRow}
                        />
                        <input
                            className="button-delete"
                            type="button"
                            value="-"
                            onClick={deleteLastRow}
                        />
                        <input
                            className="button-save"
                            type="button"
                            value="SAVE"
                            onClick={addData}
                        />
                    </div>
                </div>
            </div>
        )
    }


export default TableOfTask;
