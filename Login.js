import React, { useState } from 'react'
function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passErr, setPassErr] = useState(false)
    const [userError, setUsererror] = useState(false)

    function loginHandler(e) {
        if (user.length < 3 || password.length < 3)
         {
            alert("Type correct values");
        }
        else {
            alert("All good..!");
        }

        e.preventDefault();
    }
    function userHandler(e) {

        let item = e.target.value;

        if (item.length < 3) {
            setUsererror(true)
        }
        else {
            setUsererror(false)
        }
        setUser(item)
    }

    function passwordHandler(e) {

        let item = e.target.value;

        if (item.length < 3) {
            setPassErr(true);
        }
        else {
            setPassErr(false);
        }
        setPassword(item)
        // console.log(e.target.value.length);
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandler}>
                <input type="text" placeholder='Enter User Id' onChange={userHandler} /> {userError ? <span>User not valid</span> : " "}
                <br /><br />
                <input type="password" placeholder='Enter User Password' onChange={passwordHandler} />{passErr ? <span>User not valid</span> : " "}
                <br /><br />
                <button type="submit"> Login</button>
            </form>

        </div>
    );
}
export default Login;