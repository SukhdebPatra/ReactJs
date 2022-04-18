import { useState } from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";

const SB = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
const Header = () => {
    const mystyle={
        color:'White',
        backgroundColor:'red',
        padding:'20px',
        fontFamily:'Serif',
        
    }
    return (
      <>
        <h1 style={{color: "red"}}>Hello Style!</h1>
        <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
        <p>Add a little style!</p>
        <h3 style ={mystyle}>This is css</h3>
      </>
    );
  }

 export  {SB,Header}