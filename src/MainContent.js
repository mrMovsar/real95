import Counter from "./Counter";
import Button from "./Button";
import { useState } from "react";
function MainContent(){
    const [counter, setCounter]=useState(0);
    return (
        <>
            <Counter counter={counter}/>
            <Button counter={counter} setCounter={setCounter}/>
        </>
    )
}
export default MainContent;
