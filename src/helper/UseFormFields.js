import React, { useState } from "react";

const UseFormFields =(initalValue)=>{
    const [fields,setValues] = useState(initalValue);

    return [fields, function(event){
         setValues({...fields,[event.target.id]:event.target.value})
    }]
}

export default UseFormFields