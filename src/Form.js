import {useState} from "react";
import "./Form.css"
function Form(){
    const submitHandler = (e) =>{
        console.log(formDate)
        e.preventDefault()
        //axios.post('url')
    }
    const clearHandler = () =>{
        setFromDate({
            email:"",
            password:"",
        })
    }
    const changeHandler = (e) =>{
        console.log(e)
        let {name,value} = e.target
        setFromDate(state=>({...state,[name]: value}));

    }
    const[formDate,setFromDate] = useState({
        email:"",
        password:"",
    })
    return(<>
        <h1>Form</h1>
        <p>e.preventDefault()</p>
        <p>name</p>
        <p>dataset</p>
        <p>display value:{JSON.stringify(formDate)}</p>

        <form onSubmit={submitHandler} onChange={changeHandler} action = "">
            <label htmlFor="">E-mail:　</label>
            <input type = "email" placeholder="E-mail" onChange={changeHandler} name = "email" required={true} value={formDate.email}/>
            <label htmlFor="">Password:　</label>
            <input type = "password" placeholder="Password" onChange={changeHandler} name = "password" value={formDate.password}/>
            <button type="submit" onClick={submitHandler}>Submit</button>
            <button type="clear" onClick={clearHandler}>Clear</button>
        </form>
    </>);
}
export default Form