import React,{useEffect} from 'react'
import  Load from '../components/spinner/Load'
import {useDispatch, useSelector} from "react-redux"
import {getContacts} from '../js/actions/contact'
import Contact from '../components/contact/Contact'
const ContactList = () => {
    //hook
    //useState
    //useselector
    const contactList = useSelector(state=>state.contactReducer.contactList)
    const loadContact = useSelector(state=>state.contactReducer.loadContact)

    //usedispatch
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts());
    }, []);
    
    return (
        <div>
            {loadContact?<Load/>:contactList.map(el=><h2>{<Contact key={el._id} contact={el}/>}</h2>)}
        </div>
    )
}

export default ContactList
