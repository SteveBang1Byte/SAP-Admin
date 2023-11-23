import { useEffect, useState } from "react";
import ButtonField from "../../components/form/ButtonField";
import Label from "../../components/form/Label";
import { ColumnsPermission } from "../../mocks/columns";
import Table from "../../components/table/Table";
import Row, { RowStyle } from "../../components/table/Row";
import permissionApi from "../../api/permissionApi";
import ModalCrud from "../../components/ModalCrud";
import InputGroup from "../../components/form/InputGroup";
import { Link } from "react-router-dom";

const PermissionDashboard = () => {
    const [permissions, setPermissions] = useState([]);
    const [isShowModalCreatePermission, setIsShowModalCreatePermission] = useState(false);
    const [permission, setPermission] = useState({
      code: '',
      name: '',
      isSystem: true,
      description: '',
    }); 

    useEffect(() => {
        
      permissionApi.getAll().then((res) => {
        setPermissions(res.data.data.items);
      })
      .catch((err) => {
        console.log(err);
      });

    }, []);

    const onClickButtonCreatePermission = () => {
      permissionApi.create(permission).then((res) => {
        setIsShowModalCreatePermission(false);

          // Refresh permission list
          permissionApi.getAll().then((res) => {
            setPermissions(res.data.data.items);
          }).catch((err) => {
            console.log(err);
          });

        }).catch((err) => {
          console.log(err);
        });

    }


    return (
        <div>
        <div className="flex justify-between" >
            <Label title="Permissions" size = 'xl' />
            <ButtonField title="Create Permission" onClick={() => setIsShowModalCreatePermission(true)} />
        </div>

        <Table columns={ColumnsPermission}>
          {permissions && permissions.length > 0 ? (
            permissions.map((value, key) => (
              <Row keyValue={key} >
                <td className={RowStyle.className}> {value.id}</td>
                <td className={RowStyle.className}> {value.code}</td>
                <td className={RowStyle.className}> {value.name}</td>
                <td className={RowStyle.className}>
                  {value.isSystem.toString()}
                </td>
                <td className={RowStyle.className}> {value.description}</td>
                
                <td className={`${RowStyle.className}`}>
                <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
              </button>

                <div id="dropdownDotsHorizontal" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                      <li>
                        <Link to="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</Link>
                      </li>

                    </ul>
                    <div className="py-2">
                      <li>
                        <Link to="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</Link>
                      </li>
                    </div>
                </div>
                  
                </td>
              </Row>
            ))
          ) : (
            <tr className="text-center">
              <td className="text-gray-600">No data</td>
            </tr>
          )}
        </Table>

        <ModalCrud 
      title={'New Permission'} 
      isDisplayModal={isShowModalCreatePermission} 
      onCancel={() => setIsShowModalCreatePermission(false)}
      onOk={() => onClickButtonCreatePermission()}
      >
        <InputGroup 
        label={'Code'} 
        placeholder={'Code'} 
        valueInput={permission.code}
        onChange={(e) => setPermission({...permission, code: e.target.value})}
        />
        <InputGroup 
        label={'Name'} 
        placeholder={'Name'} 
        valueInput={permission.name}
        onChange={(e) => setPermission({...permission, name: e.target.value})}
        />
        <InputGroup 
        label={'Description'} 
        placeholder={'Description'} 
        valueInput={permission.description}
        onChange={(e) => setPermission({...permission, description: e.target.value})}
        />

      </ModalCrud>
        </div>
    )
}

export default PermissionDashboard;