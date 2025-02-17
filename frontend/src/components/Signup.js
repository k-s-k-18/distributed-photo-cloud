import { useState } from "react";

const Signup = ()=>{

    const [registerInfo, setRegisterInfo] = useState({
        'name':'',
        'email':'',
        'password':'',
        'confirm_password':''
    });

    const [passwordError, setPasswordError] = useState(false);

    const handleSubmission = (e)=>{
        e.preventDefault();

        if(registerInfo.password!=registerInfo.confirm_password){
            setPasswordError(true);
        }else{
            setPasswordError(false);
            fetch('http://localhost:8080/auth/register',{
                method:'POST',
                body:JSON.stringify(registerInfo),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(respone=>respone.json).then(data=>console.log(data));
        }
    }


    return(
        <>
            <div className="signup-container">
                <h3>Register</h3>
                <form onSubmit={handleSubmission}>
                    <input type="text" placeholder="Name" id="name" onChange={
                        (e)=>{
                            setRegisterInfo({...registerInfo,'name':e.target.value});
                        }
                    }/>
                    <input type="email" placeholder="Email" id="email" onChange={
                        (e)=>{
                            setRegisterInfo({...registerInfo,'email':e.target.value});
                        }
                    }/>
                    <input type="password" placeholder="Enter Password" id="password" onChange={
                        (e)=>{
                            setRegisterInfo({...registerInfo,'password':e.target.value});
                        }
                    }/>
                    <input type="password" placeholder="Confirm Password" id="confirm_password" onChange={
                        (e)=>{
                            setRegisterInfo({...registerInfo,'confirm_password':e.target.value});
                        }
                    }/>
                    {passwordError && <p>Make sure passwords match</p>}
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    );
}

export default Signup;