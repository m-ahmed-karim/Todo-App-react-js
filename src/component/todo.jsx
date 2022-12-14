import React, { useState } from "react";
import { AiOutlineDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import swal from 'sweetalert'
function TodoApp() {
    const [data, setData] = useState([])
    const [todo, setTodo] = useState("")
    const [updat, setUpdat] = useState()
    const [hide, setHide] = useState('ahmed')
    const add = () => {
        if (todo === "" || todo === " " || todo === "  " || todo === "   " || todo === "    ") {
            swal("Plz fil the todo")
        }
        else {
            let obj = {
                Todo: todo
            }
            setData(data.concat([obj]))
            setTodo("")
        }
    }
    const update = () => {
        data[updat].Todo = todo
        setHide("ahmed")
        setTodo("")
    }
    const Deletall = () => {
        setData([])
    }
    return (
        <>
            <div className="main_todo">
                <h1>Todo_App</h1>
                <input type="text" placeholder="Enter_todo_app" value={todo} onChange={(e) => { setTodo(e.target.value) }} />
                {
                    hide === 'ahmed' ?
                        <button onClick={add} className="btn_1" >Add</button>
                        :
                        <button onClick={update} className="btn_3"><GrUpdate /></button>
                }
                <div className="value_todo">

                    {data?.map((v, i) => {
                        return (
                            <>
                                <div className="text">{v?.Todo}
                                    <div>
                                        {hide === 'ahmed' ?

                                            <span onClick={() => {
                                                let edit = data[i].Todo
                                                setTodo(edit)
                                                setUpdat(i)
                                                setHide('umair')
                                            }}> <AiFillEdit /></span>
                                            :
                                            <span className="opacity"> <AiFillEdit /></span>
                                        }
                                        {
                                            hide === 'ahmed' ?
                                                <span onClick={() => {
                                                    let delet = data.filter((value, index) => {
                                                        return i != index
                                                    })
                                                    setData(delet)
                                                }}><AiOutlineDelete /></span>
                                                :
                                                <span className="opacity"><AiOutlineDelete /></span>
                                        }
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
                {
                    data.length > 1 && hide === 'ahmed' ?
                        <button className="btn_2" onClick={Deletall}>Delete All</button>
                        :
                        null
                    // <button  className="btn_2 opacity" >Delete All</button>
                }

            </div>
        </>
    );
};
export default TodoApp;