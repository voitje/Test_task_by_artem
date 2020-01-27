import * as React from 'react';
import {connect, useDispatch, useSelector, useStore} from 'react-redux';
import './style.scss';
import ContentEditable from 'react-contenteditable'
import {FormEvent, useState, useRef, useEffect} from 'react';
import {FormEventHandler} from "react";
import {ArrayActionTypes, IArray} from "../../store/project/types";
import {IState} from "../../store/createStore";
import {Dispatch, AnyAction, bindActionCreators} from 'redux'
import ProjectActions from "../../store/action/projectActions";
import {log} from "util";

interface IArrayProps {
  array?: IArray;
}

interface ICell {
  text: string | null
}

// @ts-ignore
const TableOfTask : React.FC<IArrayProps>= (props) => {
  //const _array = useSelector((state: IState) => state.array);

  const arrayGradingTable = useSelector((state: IState) => state.gradingTable);
  const arrayProjects = useSelector((state: IState) => state.projects);

  const dispatch = useDispatch();
  const updateArray = (newArray: IArray) => dispatch(ProjectActions.updateArray(newArray));

  const  {getState} = useStore();

  const [value, setValue] = useState<string | null>('');
  const [cells, setCells] = useState<ICell[]>([]);

  /** Массив из массивов, в котором значения в ячейках*/
  const [arrayCell, setArrayCell] = useState<Object[][]>([]);

  /** test variant by george SHPAK*/
  const [tableArray, setTableArray] = useState<Object[]>([]);

  const [countRows, setCountRows] = useState<number>(0);
  const [rows, setRows] = useState<JSX.Element[][] | null>(null);

  const subhead = useRef(null);
  const tableTask = useRef(null);

  const handleChange = (e: React.FormEvent<HTMLDivElement>) => {
    // @ts-ignore
    let table = document.getElementById("table-task")
      .getElementsByTagName('tbody')[0];

  };

  const renderRow = () => {

    let test = [];
    for (let i = 0; i < 3; i++) {
      test.push(renderCell(false))
    }
    for (let i = 3; i < 8; i++) {
      test.push(renderCell(true))
    }
    return (
      <div className="divTableRow">
        {test.map((item) => item)}
      </div>
    )
  };

  const renderCell = (renderTwo: boolean) => {
    if (renderTwo) {
      return (
        <div className='zhopa' style={{"display": "table-cell"}}>
          <div
            style={{
              "display": "inline-flex",
              width: '100%', height: '100%', border: '1px dashed'
            }}
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
    } else {
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
    for (let i = 0; i < 13; i++) {
      test.push(renderCell1())
    }
    return (
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


  const renderCell1 = () => {
    return (
      <div className="pythonGovno" contentEditable/>
    )
  };

  const testHandle = (e: InputEvent) => {
    let a = [];
    let b = [[]];
    // @ts-ignore

    a.push(e.data);
    // @ts-ignore
    b.push(a);
    // @ts-ignore
    b[0].push('a');
    updateArray(b);
    setValue(e.data);
  };

  const addNewRow = () => {
    // @ts-ignore
    let table = document.getElementById("table-task")
      .getElementsByTagName('tbody')[0];
    // @ts-ignore
    let countTd = document.getElementById('subhead')
      .getElementsByTagName('td').length;
    let row = table.insertRow();
    let asd = React.createElement('div', {
      className: "pythonGovno",
      contentEditable: 'true'
    });
    for (let i = 0; i < countTd; i++) {
      let newDiv = document.createElement('div');
      newDiv.className = "pythonGovno";
      newDiv.id = i.toString();
      // @ts-ignore
      //newDiv.onChange = handleChange();

      newDiv.contentEditable = 'true';
      // @ts-ignore
      newDiv.addEventListener("input", (e: InputEvent) => {
        testHandle(e)
      });

      // @ts-ignore
      let cell = row.insertCell(i).appendChild(newDiv);
    }

    // @ts-ignore
    console.log(subhead)

    let newCells: any[] = [];

    //rows.push(newCells);
    console.log(arrayCell)
  };

  const createCell = (id: string) => {
    return (
      <div
        className="pythonGovno"
        id={id}
        contentEditable
      >
        {value}
      </div>
    )
  };

  const createRow = () => {

    // @ts-ignore
    let count = subhead.current.cells.length;
    let newRow: JSX.Element[] = [];
    let newRowString: Object[] = [];
    for (let i = 0; i < count; i++) {
      newRow.push(createCell(i.toString()));
    }
    for (let i = 0; i < count; i++) {
      newRowString.push(
        {
          name: i.toString(),
          id: i.toString(),
        }
      );
    }

    // (!arrayCell[0].length)
    //   ? setArrayCell([[...newRowString]])
    //   : setArrayCell(prevState => {
    //     prevState.push(newRowString);
    //     return prevState
    //   });
    setArrayCell(prevState => {
      return [...prevState, newRowString]
    });
    setCountRows(prevState =>  {return prevState + 1 });

    let newRowTest = {
      module: '',
      name: '',
      comment: '',
      designer: {
        pos: '',
        neg: ''
      },
      frontend: {
        pos: '',
        neg: ''
      },
      backend: {
        pos: '',
        neg: ''
      },
      ios: {
        pos: '',
        neg: ''
      },
      android: {
        pos: '',
        neg: ''
      },
    };

  };


  // const row = {
  //   module: 0,
  //   name: 1,
  //   comment: 2,
  //
  //   designerPos: 3,
  //   designerNeg: 3,
  //   // or
  //   designer: {
  //     pos: 3,
  //     neg: 4
  //   },
  // };
  //
  // const array = [];
  // array.push(row);
  // array.push(row);
  // array.push(row);
  //
  // console.log('ARRAY', array);


  const getRows = () => {
    if (arrayCell) {
      arrayCell.map((item: any) => {
        return (
          <tr>
            {
              item.map((subItem: any) => {
                return (
                  <td>
                    <div
                      className="pythonGovno"
                      id={subItem.id}
                      contentEditable
                    >
                      {subItem.name}
                    </div>
                  </td>
                )
              })
            }
          </tr>
        )
      });
    }
    else {
      return(
      <div>PUSTO</div>
      )
    }
    // arrayCell && arrayCell.map((item: any) => {
    //   return (
    //     <tr>
    //       {
    //         item.map((subItem: any) => {
    //           return (
    //             <td>
    //               <div
    //                 className="pythonGovno"
    //                 id={subItem.id}
    //                 contentEditable
    //               >
    //                 {subItem.name}
    //               </div>
    //             </td>
    //           )
    //         })
    //       }
    //     </tr>
    //   )
    //  });
    // return (
    //   <div>XUY</div>
    // )
  };

  const deleteLastRow = () => {
    let newArrayCell = arrayCell;
    newArrayCell.pop();
    setArrayCell([...newArrayCell]);
    setCountRows(prevState => prevState - 1);
  };

  const saveData = () => {
    dispatch(ProjectActions.saveGradingTable(arrayCell));
    console.log('STORE', getState().array)
    console.log('STORE_ARRAY',arrayGradingTable);
    //console.log('store_projects', arrayProjects);
  };

  useEffect(
    () => {
      }, [arrayCell]
  );
  return (
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
        <table id="table-task" ref={tableTask}>
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
          <tr id="subhead" ref={subhead}>
            <td>a</td>
            <td>a</td>
            <td>a</td>
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
          {
            (arrayCell.length > 0 && countRows > 0 )
              ?
              arrayCell.map((item: any) => {
                return (
                  <tr>
                    {
                      item.map((subItem: any) => {
                        return (
                          <td>
                            <div
                              className="pythonGovno"
                              id={subItem.id}
                              contentEditable
                            >
                              {subItem.name}
                            </div>
                          </td>
                        )
                      })
                    }
                  </tr>
                )
              })
               :
               <div>NOTHING</div>
          }
          </tbody>
        </table>
        <div className="buttons-action">
          <input
            className="button-add"
            type="button"
            value="+"
            onClick={createRow}
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
            onClick={saveData}
          />
        </div>
      </div>
    </div>
  )
};

export default TableOfTask;
