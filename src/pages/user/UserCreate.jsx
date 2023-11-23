import { useState } from "react";
import BackPage from "../../components/BackPage";
import ButtonField from "../../components/form/ButtonField";
import InputGroup from "../../components/form/InputGroup";
import Label from "../../components/form/Label";
import userApi from "../../api/userApi";
import { useNavigate } from "react-router";
import { PATH_DASHBOARD } from "../../routes/paths";

const UserCreate = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      firstName : '',
      lastName : '',
      fullName: '',
      status: 1,
  });

  const onClickButtonCreate = () => {
      userApi.registration(user).then((res) => {
          console.log(res);
          navigate(PATH_DASHBOARD.user.list)
      }
      ).catch((err) => {
          console.log(err);
      })

  }


  return (
    <div className="py-6 px-10 ">
       <div>
        <BackPage />
      </div>

      <div className="flex justify-between py-2" >
      <Label title={'Create a user'} size="xl" />
      <ButtonField title={'Create'} onClick={() => onClickButtonCreate()} />
      </div>

      <div className="px-4 py-1 w-3/6 m-auto" >
          <InputGroup label={'Username'} placeholder={'Username'} valueInput={user.username} onChange={(e) => setUser({...user, username: e.target.value})} required  />
          <InputGroup label={'Password'} placeholder={'Password'} typeInput={'password'} valueInput={user.password} onChange={(e) => setUser({...user, password: e.target.value})} required  />
          <InputGroup label={'Confirm password'} placeholder={'Confirm password'} typeInput={'password'} valueInput={user.confirmPassword} onChange={(e) => setUser({...user, confirmPassword: e.target.value})} required  />
          <InputGroup label={'Email'} placeholder={'Email'} valueInput={user.email} onChange={(e) => setUser({...user, email: e.target.value})} required  />
          <div className="flex ">
          <InputGroup label={'First name'} placeholder={'First name'} valueInput={user.firstName} customClassName={'w-2/4 mr-2'}  onChange={(e) => setUser({...user, firstName: e.target.value})} />
          <InputGroup label={'Last name'} placeholder={'Last name'} valueInput={user.lastName} customClassName={'w-2/4'} onChange={(e) => setUser({...user, lastName: e.target.value})} />
          </div>
          <InputGroup label={'Full name'} placeholder={'Full name'} valueInput={user.fullName} onChange={(e) => setUser({...user, fullName: e.target.value})} />
      </div> 
    </div>
  );
};

export default UserCreate;
