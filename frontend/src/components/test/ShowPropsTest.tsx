//! Show propts
'use client'
import GetChildPropts from "@/components/test/GetChildProps";
import TestComp from "@/components/test/TestComp";


export default function ShowPropsTest(){
    const handleCardData = (data: string) => {
        console.log('Received from Card:', data);
      };
      const showValue = (value: number) : number => {
        console.log(value)
        return value;
      }
      return(
        <GetChildPropts title='Titulo' rice="rice" onAction={handleCardData} GetChildProp={showValue}>
          <TestComp value={10}/>
        </GetChildPropts>
      )
      
}