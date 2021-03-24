import { GET_CONTACTS, LOAD_CONTACT ,FAIL_CONTACT,GET_CONTACT } from "../actionTypes/contactTypes"
import axios from "axios"
export const  getContacts = ()=> async (dispatch) => {
    dispatch({type:LOAD_CONTACT})
    try {
       let result  = await axios.get("/api/contact")
      const a = dispatch({type:GET_CONTACTS, payload:result.data});//{msg:,contacts:[]}
    } catch (error) {
        dispatch({type:FAIL_CONTACT, payload:error.response.data})
    }
}


export const getContact = (id) => async (dispatch) => {
    try {
      let result = await axios.get(`/api/contact/${id}`);
       dispatch({ type: GET_CONTACT, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_CONTACT, payload: error.response.data });
    }
  };


  
  export const postContact = (newContact) => async (dispatch) => {
    try {
      await axios.post("/api/contact", newContact);
      dispatch(getContacts());
    } catch (error) {
      dispatch({ type: FAIL_CONTACT, payload: error.response.data });
    }
  };
  
  export const deleteContact = (id) => async (dispatch) => {
    try {
      await axios.delete(`/api/contact/${id}`);
      dispatch(getContacts());
    } catch (error) {
      dispatch({ type: FAIL_CONTACT, payload: error.response.data });
    }
  };
  
  export const editContact = (id, newContact) => async (dispatch) => {
    try {
      await axios.put(`/api/contact/${id}`, newContact);
      dispatch(getContacts());
    } catch (error) {
      dispatch({ type: FAIL_CONTACT, payload: error.response.data });
    }}