import { Fragment, useState } from "react";

const Todo = () =>{
    const [inputText,setInputText]=useState('');
    const [id,setId] = useState(1);
    const [items,setItems] = useState([])
    const handleClick =() => {
        console.log("I got clicked");
        let obj = {
            id: id,
            itemValue: inputText,
        };
        setItems([...items,obj]);
        setInputText('');
        setId(id+1);
    };
    const handleDelete =(idToDelete) => {
        console.log("Delete got called" +idToDelete);

        let filteredVal = items.filter((item) => item.id != idToDelete);
        setItems(filteredVal);
    };
    const handleEdit =(idToEdit) => {
        let updatedItem = prompt("Enter updated item task")
        let updatedItems = items.map((item) => {
            if(item.id===idToEdit){
                let updatedObj ={
                    id:item.id,
                    itemValue:updatedItem,
                };
                return updatedObj;
            }
            return item;
        });
        setItems(updatedItems);
    };
    return (
        <>
        <h1>My ToDo List</h1>
        <input 
        type='text' 
        placeholder='Enter Your Item'
        value={inputText} 
        onChange={(event) => setInputText(event.target.value)}
        />
        <button onClick={handleClick}>ADD</button>
        <ul>
            {items.map((item) =>(
                <div key={item.id} style={{display: 'flex'}}>
                    <li>{item.itemValue}</li>
                    <button onClick={() =>handleEdit(item.id)}>Edit</button>
                    <button onClick={() =>handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </ul>
        </>

    )
};
export default Todo;