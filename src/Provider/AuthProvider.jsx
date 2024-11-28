import { createContext } from "react";
// created a context with name and with initate value null
const AuthContext =  createContext(null)

const AuthProvider = ({children}) => {
    // created a object value for context with name authInfo
    const authInfo = {
        name : 'Nodi sagor khal bil'
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