import React, { useState } from 'react';
//Using useState() hooks in react
const ToDo = () => {
    const [list, setList] = useState([])
    const [item, setItem] = useState("")

    const AddtoList  = () => {
        list.push(item)
        setList([...list])
    }

    const RemoveItem = (index) => {
        list.splice(index, 1)
        setList([...list])
    }

    return (
        <div>
            <h2>Simple ToDo App</h2>
            <table>
                <tbody>
                    {
                        list.length !== 0 ? (
                            list.map((element, index) => {
                                return (
                                    <tr>
                                        <td>{element}</td>
                                        <td><button onClick={() => {
                                            {RemoveItem(index)}
                                        }}>Remove</button></td>
                                    </tr>
                                )
                            })
                        ) : (<tr></tr>)
                    }
                </tbody>
            </table>
            <input onChange={(e)=>{setItem(e.target.value)}} placeholder='Item'/>
            <button onClick={AddtoList}>Add</button>
        </div>
    );
};

export default ToDo;