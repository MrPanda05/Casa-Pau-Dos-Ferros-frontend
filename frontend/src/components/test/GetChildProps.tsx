//! This is a test file to see how to pass props to children components
'use client'
import React from "react";
//interface for test
interface ModalRendererProps {
    title: string;// prop that is passed to this component
    children: React.ReactNode;// children of this component
    onAction?: (value: string) => void; // Callback function to send data back
    GetChildProp? : (value: number) => number;
  }




//rice is a test prop that does not come from the interface, it uses & to be used
export default function GetChildPropts({children, title, onAction, GetChildProp, rice} : ModalRendererProps & { rice: string }){
    const handleAction = () => {
        if (onAction) {
            onAction(`Action from this`);
        }
      };
      const GetChild = (value: number) =>{
        if(GetChildProp){
            GetChildProp(value);
        }
      }
      const getChildValue = () => {
        if (React.isValidElement(children) && children.props.value !== undefined) {
          return children.props.value;
        }
        return null;
      };
    
    return(
        <div>
            {children}
            {title}
            {rice}
            <button onClick={handleAction}>
                click me
            </button>
            <button onClick={() => GetChild(getChildValue())}>
                Get value
            </button>
        </div>
    )

}