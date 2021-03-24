import React,{useState, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import{editContact,postContact} from "../js/actions/contact"
import { useHistory } from "react-router-dom";


const Add = () => {    
const [contact, setContact] =useState({})
//const [email,setEmail]=useState('')
//const [phone,setPhone]=useState('')
    const dispatch = useDispatch()
    const editcontact = useSelector(state => state.contactReducer.contact)
    console.log(editContact)
    const edit = useSelector(state => state.editReducer.edit)
    const History = useHistory();
    console.log(edit)
    useEffect(() => {
        edit
        ? setContact(editcontact)
        :setContact({name:"",email:"",phone:""})
    }, [editcontact,edit]);
    const handleChange =(e)=>{
       e.preventDefault();
        edit
        ?
        dispatch(editContact(editcontact._id,contact))
        : dispatch(postContact(contact))
        History.push("/");
    }
        const handleContact = (e)=>{
            setContact({...contact,[e.target.name]: e.target.value})
        } 
    return (
        <div>
         <form>
         <label>Name<input name="name" value={contact.name} onChange={handleContact}/></label>
         <label>Email<input name="email" value={contact.email} onChange={handleContact}/></label>
         <label>Phone<input name="phone"value={contact.phone} onChange={handleContact}/></label>
        <button onClick={(e)=>handleChange(e)}>{edit?'edit':'add'}</button>
         </form>
        </div>
    )
}

export default Add
/*import React,{useState, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import{editContact,postContact} from "../js/actions/contact"


const Add = () => {
    const [contact, setContact] =useState({})
   // const [name,setName]=useState('')
    //const [email,setEmail]=useState('')
    //const [phone,setPhone]=useState('')
    const dispatch = useDispatch()
    const editReducer = useSelector(state => state.contactReducer.contact)
    const edit = useSelector(state => state.editReducer)
    useEffect(() => {
        edit
        ? setContact(contact)
        :
        setContact({name:"",email:"",phone:""})
    }, [editContact , edit])
    const handleChange =(e)=>{
       e.preventDefault();
        edit
        ?
        dispatch(editContact(editReducer._id,contact))
        : dispatch(postContact(contact))
    }
        const handleContact = (e)=>{
            setContact({...contact,[e.target.name]: e.target.value})
        }
    return (
        <div>
         <form>
         <label>Name<input name="name" value={contact.name} onChange={handleContact}/></label>
         <label>Email<input name="email" value={contact.email} onChange={handleContact}/></label>
         <label>Phone<input name="phone"value={contact.phone} onChange={handleContact}/></label>
         <button onClick={(e)=>handleChange(e)}>{edit?"edit":"add"}</button>
         </form>
        </div>
    )
}

export default Add
*/