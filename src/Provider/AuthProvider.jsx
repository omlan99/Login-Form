import { createContext, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// created a context with name and with initate value null
export const AuthContext =  createContext(null)

const AuthProvider = ({children}) => {
    const name = 'check check'

    // crating an state on based of logged user 
    const {user, setUser} = useState(null)
    // created a function that holds creating new user function of firebase
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // created a function that hold singin functionality
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // creating an observer to check last logged in user
    onAuthStateChanged(auth, loggedUser => {
        if(loggedUser){
            console.log(loggedUser)
            setUser(loggedUser)
        }
        else{
            console.log('nobody logged in')
            setUser(null)
        }
    }) 
    // created a object value for context with name authInfo
    const authInfo = {
        // we can use declared variable name and value as an objects key and property
        name,
        // adding the function 
        createUser,
        signInUser
    }
    return (
        // useed the context with .provider and value
        <AuthContext.Provider value={authInfo}>
            {/* inside this provider everbody will get the access of context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;