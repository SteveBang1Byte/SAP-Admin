import { useState } from "react";
import InputGroup from "../components/form/InputGroup";
import ButtonField from "../components/form/ButtonField";
import userApi from "../api/userApi";

const SignIn = () => {
// #region state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordStronger , setIsPasswordStronger] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
// #endregion    

// #region functions
    const handleOnClickContinue = () => {
        // if(password.length >= 8){
        //     setIsPasswordStronger(true);
        //     setIsLoading(true);
        // } else {
        //     setIsPasswordStronger(false);
        // }
        setIsLoading(true);
        userApi.authentication(email, password).then((res) => {
            setIsLoading(false);
    
        }).catch((err) => {
            setIsLoading(false);
        });
    }
// #endregion




    return (
        <>
         <div className="flex justify-center items-center my-10">
         <div className="container w-2/6 px-8 py-12 shadow-xl rounded ">
            <div>
              <p className="text-2xl font-medium mb-3">Sign in to your account</p>
              <InputGroup label='Email' placeholder='example@email.com' valueInput={email}  onChange={(e) => setEmail(e.target.value)} />
              <InputGroup label='Password' typeInput='password' placeholder='******' valueInput={password} onChange={(e) => setPassword(e.target.value)} />
              
              {!isPasswordStronger ? <p className="text-xs font-medium py-2 text-rose-500">Password must be at least 8 characters.</p> : null}
              
              <div className="flex justify-between items-center my-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="border border-gray-300 rounded-md w-4 h-4 focus:outline-none focus:border-blue-500"
                  />
                  <p className="text-sm  font-medium ml-2">Remember me</p>
                </div>
                <p className="text-sm font-medium text-blue-500 hover:underline cursor-pointer">
                Forgot your password?
                </p>
              </div>
              <div className="my-6">
              <ButtonField  title='Continue' width={'w-full'} onClick={handleOnClickContinue} isLoading={isLoading}/> 
              </div>
              
            </div>
          </div>
         </div>
        </>
      );
};

export default SignIn;