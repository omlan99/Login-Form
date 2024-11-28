import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Registration = () => {
    // accesing the createuser from AuthContext from AuthProvider component
    const {createUser} = useContext(AuthContext)
    function handleRegister(e) {
        e.preventDefault();
        const userName = e.target.userName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, userName, password);
        // giving the create user it's paramete vlaue
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
           console.log(error.message) 
        })
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold mb-3">Registration now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="Text"
                  placeholder="User Name"
                  name="userName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p>Alredy have an account! <Link className="text-blue-500" to='/login'>Login Now</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
