import React, { useState } from 'react';
import { loginContext } from './loginContext';
const LoginProvider=(props)=>{
    const [login ,setLogin]=useState(false);
    return(
        <loginContext.Provider value={{login,setLogin}}>
            {props.children}
        </loginContext.Provider>
    );
}
export default LoginProvider;
// export const AuthContext = () => useContext(loginContext);