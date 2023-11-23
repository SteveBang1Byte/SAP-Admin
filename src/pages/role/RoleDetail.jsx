import { useEffect, useState } from "react";
import { useParams } from "react-router";
import roleApi from "../../api/roleApi";
import BackPage from "../../components/BackPage";
import InputGroup from "../../components/form/InputGroup";
import ButtonField from "../../components/form/ButtonField";
import TableField from "../../components/table/TableField";
import { ColumnsUser } from "../../mocks/columns";
import Spinner, { SpinnerType } from "../../components/Spinner";
import Pagination from "../../layouts/pagination/Pagination";
import RolePermissionTable from "./RolePermissionTable";

const RoleDetail = () => {
  const [currentTab, setCurrentTab] = useState('settings'); // Default tab

    const { id } = useParams();
    const [role, setRole] = useState({});
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    

    const tab =  {
      Settings: 'settings',
      Permissions: 'permissions',
      Users: 'users'
    }
    
    useEffect(() => {
        roleApi.getById(id).then((res) => {
            setRole(res.data.data);
        }).catch((err) => {
            console.log(err);
        });
      }, [id]);

      const onChangeInput = (variableName, value) => {
        setRole({ ...role, [variableName]: value });
      }


      const onClickTabUsers = () => {
        setIsLoading(true);
        roleApi.getUsers(id, role).then((res) => {
          setUsers(res.data.data);
        }).catch((err) => {
          console.log(err);
        });
        setIsLoading(false);
      }

      const onClickSaveButton = () => {
        setIsButtonLoading(true);
        roleApi.edit(id, role).then((res) => {
            setRole(res.data);
        }).catch((err) => {
          console.log(err);
        });
        setIsButtonLoading(false);
      }



    return (

  <>
          <BackPage />  
          <div className="flex flex-col mb-8">
          <p className="text-3xl font-medium mb-3">{role.name}</p>
          <p className="text-sm">Role ID <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.25 rounded dark:bg-gray-700 dark:text-gray-300">{id}</span></p>
          </div>

      {/* Tabs Navigation*/}
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">

          <li className="me-2" role="presentation">
              <button className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-indigo-600 hover:border-indigo-500  
                ${currentTab === tab.Settings ? ' border-indigo-500 text-indigo-600 ' : ''}
              `} 
              id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"
              onClick={() => setCurrentTab(tab.Settings)}
              >
                Settings
              </button>
          </li>

          <li className="me-2" role="presentation">
              <button 
              className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-indigo-600 hover:border-indigo-500 dark:hover:text-gray-300 
               ${currentTab === tab.Permissions ? ' border-indigo-500 text-indigo-600 ' : ''}
               `}
               id="dashboard-tab" 
               data-tabs-target="#dashboard" 
               type="button" 
               role="tab" 
               aria-controls="dashboard"
               aria-selected="false"
               onClick={() => 
                {
                  setCurrentTab(tab.Permissions);
                }
              }

               >
                Permissions
              </button>
          </li>

          <li className="me-2" role="presentation">
              <button className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-indigo-600 hover:border-indigo-500 dark:hover:text-gray-300
                 ${currentTab === tab.Users ? ' border-indigo-500 text-indigo-600 ': ''}
                 `} 
                 id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false"
                 onClick={() => 
                  {
                    setCurrentTab(tab.Users);
                    onClickTabUsers();
                  }
                }
                 >
                  Users
              </button>
          </li>
      </ul>
    </div>

    {/* Content Tabs*/}
      <div className="py-4 w-4/5" >
        {/* Tab Content Setting */}

        <div id="role-setting" className={`${currentTab !== tab.Settings ? ' hidden ': ''} pb-10`} >

        <InputGroup  label={'Name'} placeholder={'Name'} onChange={(e) => onChangeInput('name', e.target.value)} valueInput={role.name}/>
        <InputGroup  label={'Description'} placeholder={'Description'} onChange={(e) => onChangeInput('description', e.target.value)}  valueInput={role.description} />

        <div className="flex items-center py-2">
          <input checked={role.isSystem} id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-1" 
          onChange={(e) => onChangeInput('isSystem', e.target.checked)}
          /> 
          <label htmlFor="checked-checkbox" className="text-sm font-medium"> Is system </label>
        </div>

        <ButtonField title={'Save'} onClick={() => onClickSaveButton()} className={'my-6'} isLoading={isButtonLoading} />

        </div>


        <div id="role-permission" className={`${currentTab !== tab.Permissions ? ' hidden ': ''} pb-10`} >
          <RolePermissionTable roleId={role.id} />
        </div>


        <div id="role-user" className={`${currentTab !== tab.Users ? ' hidden ': ''} pb-10` } >
          <div className="flex items-center justify-between">
            <span className="text-sm w-4/6 text-gray-500">Users that have this role directly assigned.</span>
            <ButtonField title={'Add Users'} onClick={() => console.log('Save')} className={'my-6'} />
          </div>
          {   
              isLoading ? <Spinner type={SpinnerType.medium} /> :
              <TableField columns={ColumnsUser} rows={users} /> 
          }
           <Pagination pageNumber={1} pageSize={10} totalItems={100} /> 
        </div>

      </div>
    </>

    );
};

export default RoleDetail;