import { createSlice } from '@reduxjs/toolkit'

interface LoginState{
    isLogin: boolean;
    email: string;
    isEmail: boolean;
    password: string;
    isPassword: boolean;
}

const initialState: LoginState = {
    isLogin: false,
    email: '',
    isEmail: false,
    password: '',
    isPassword: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail:( state, action) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            state.isEmail = re.test(action.payload)
            state.email = action.payload
        },
        setPassword:( state, action) => {
            state.isPassword = action.payload.length > 7;
            state.password = action.payload;
        },
        setLogin:( state ) => {
            state.isLogin = (state.isEmail && state.isPassword)
        },
        setLogout:(state) => {
            state.isLogin = false
        }
    }
})

export const { setEmail, setPassword, setLogin, setLogout } = loginSlice.actions


export default loginSlice.reducer
