import React from "react";

const Reducer = (state , action)=> {
   switch(action.type) {
    case 'changeName':
        return{...state, name: action.payload.namee};
    case 'changeEmail':
        return{...state, email: action.payload.email};
    case 'changeJobPosition':
        return{...state , jobPosition:action.payload.jobPosition };
    case 'changePhone':
        return{...state, phone: action.payload.phone};
    case 'changeFile':
        return{...state , rezome: action.payload.file }   
    case 'post':
        return{...state , state: action.payload.newData}
          
    };
}
export default Reducer