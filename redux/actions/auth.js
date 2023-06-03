import { AUTH } from "../const/actionTypes";
import * as api from "../../pages/api/api";

export const signin = (formData) => async (dispatch) => {
    try {
        //log in the user
        const { data } = await api.signin(formData);
        console.log(data);
        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
    }
}
export const signup = (formData) => async (dispatch) => {
    try {
        //log in the user
        const { data } = await api.signup(formData);
        console.log(data);
        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
    }
}