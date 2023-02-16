import React, { useContext } from "react";
import styled from 'styled-components'
import Input from "./Input";
import Lable from "./Lable";
import Error from "./Error";
import { store } from "../context/Context";
import axios from "axios"
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
    width: 50vw;
    height: 62vh;
    background-color: #eaf3ff;
    border-radius: 10px;
    padding :2rem;
    display: flex ;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
`
const WraperLableInput = styled.div`
   font-size:1.5rem;
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: .5rem;
`
const Button = styled.button`
    padding: 0 3rem;
    background-color: #1a1cb8;
    color: white;
    border-radius: 4.5rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`
let format;

const Form =()=> {

    const {state,dispatch} = useContext(store)

    const ChangeName = (event) => {

        dispatch({
            type:'changeName',
            payload: {namee: event.target.value}
        })   
    }

    const ChangeEmail = (event) => {
        dispatch({
            type:'changeEmail',
            payload: {email: event.target.value}
        })     
    }

    const ChangeJobPosition = (event) => {
        dispatch({
            type:'changeJobPosition',
            payload: {jobPosition: event.target.value}
            })     
    }

    const ChangePhone = (event) => {
        dispatch({
            type:'changePhone',
            payload: {phone: event.target.value}
        })
    }

    const ChangeFileName = (event) => {
        dispatch({
            type: 'changeFile',
            payload: {file: event.target.value}   
        })

        format = event.target.value.substring(event.target.value.lastIndexOf('.') + 1);
        console.log(format);
      
    }

    let newData={}
    const formData = ()=> {

        newData = {
        name: state.name,
        email: state.email,
        jobPosition: state.jobPosition,
        phone: state.phone,
        file: state.rezome
        }

        axios.post('http://localhost:4000/data',newData)
        .then(()=> {
            toast.success("Form Added Successfully!")
        })  
        .catch(()=> {
            toast.error("Form Is Rejected !")  
        })
    }   

    const postHandler = ()=> {
        dispatch({
            type: 'post',
            payload: newData
        })
        formData()
        state.name = '', state.email='', state.jobPosition='', state.phone='', state.rezomeh=''
    }

    return(
        <Container>
            <ToastContainer/>
        
            <WraperLableInput>
            <Lable title={"نام"}/>
            <Input changeVal={ChangeName} value={state.name} />
            {(state.name.length >=1 && state.name.length <=2) ?
             <Error title={"نام"}/>: 
            (!state.name.match("^[a-zA-Z ]*$")) ?
             <Error title={"نام"}/>:''  
            }
            
            </WraperLableInput>

            <WraperLableInput>
            <Lable title={"ایمیل"}/>
            <Input changeVal={ChangeEmail} type={'email'} value={state.email}/>
            {state.email.length >=2 && !state.email.match(/.+@.+/)?
                <Error title={"ایمیل"}/>: ''
            }
            </WraperLableInput>

            <WraperLableInput>
            <Lable title={"موقعیت همکاری"}/>
            <Input changeVal={ChangeJobPosition} value={state.jobPosition}/>
            {(state.jobPosition.length >=1 && state.jobPosition.length <=2) ?
                <Error title={"موقعیت همکاری"}/>:
            (!state.jobPosition.match("^[a-zA-Z ]*$")) ?
                <Error title={"موقعیت همکاری"}/>:''
            }
            
            </WraperLableInput>
            
            <WraperLableInput>
            <Lable title={"شماره تماس"}/>
            <Input changeVal={ChangePhone} value={state.phone}/>
            {(state.phone.length >=12)?
            <Error title={"شماره تماس"}/>:
            (state.phone.length >=1 && state.phone.match("^[a-zA-Z]*$")) ?
            <Error title={"شماره تماس"}/>:''
            }
            
            </WraperLableInput>

            <WraperLableInput style={{marginLeft:"23rem"}}>
            <Lable title={"فایل  رزومه ( با فرمت های pdf یا jpg,png )"}/>
            <Input type={"file"} color={"white"} changeVal={ChangeFileName} value={state.rezome}/>
            {(format !='pdf' && format != 'png' && format != 'jpg') ?
                 <Error title={"فایل رزومه"}/> : null
            
            }
            
            </WraperLableInput>

            <Button onClick={postHandler}>ارسال درخواست</Button>
            
        </Container>
    )
}
export default Form