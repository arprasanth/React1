import React from "react";
//import { useHistory } from "react-router-dom";

//const history = useHistory();

//   const state = {
//     redirect: null,
//   };

  const submitLogin = (e) => {
    e.preventDefault();

    const Obj = e.target;
    const email = Obj.email.value;
    const password = Obj.password.value;

    console.log(email, password);

    //email ? history.push("/Income") : "";

    //email && password ? this.setState({ redirect: "/Income" }) : "";
  };

const Login = () => {
  return (
    <div className="container">
      <div className="row align-items-center mt-5">
        <form onSubmit={(e) => submitLogin(e)}>
          <div className="col col-md-4 offset-md-4">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input name="password" type="password" className="form-control" />
            </div>
            <div className="d-grid">
              <button className="btn btn-primary btn-block">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
