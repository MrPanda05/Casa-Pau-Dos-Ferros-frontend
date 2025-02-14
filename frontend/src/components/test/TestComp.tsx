//! This is a test component to check if the project is working fine or not.

interface TestCompProps {
    value: number;
  }
  //useState and useEffect to make the this child component send its data to parent
  

export default function TestComp({ value }: TestCompProps){
    return(
        <div>
            {value}
        </div>
    )
}