import IconDelete from "../../assets/icons/delete.svg";
import { ColumnsPermission } from "../../mocks/columns";
import Table from "../../components/table/Table";
import Row, { RowStyle } from "../../components/table/Row";
import ModalCrud from "../../components/ModalCrud";
import { useEffect, useState } from "react";
import Pagination from "../../layouts/pagination/Pagination";
import { TypeButton } from "../../constants/ColorConstant";
import roleApi from "../../api/roleApi";
import ButtonField from "../../components/form/ButtonField";
import Spinner, { SpinnerType } from "../../components/Spinner";
import permissionApi from "../../api/permissionApi";

const RolePermissionTable = ({ roleId }) => {
  const [isDisplayModalConfirmDelete, setIsDisplayModalConfirmDelete] =useState(false);
  const [isDisplayModalAddPermission, setIsDisplayModalAddPermission] =useState(false);

  const [itemCurrent, setItemCurrent] = useState({});
  const [permissionIdCurrentSelect, setPermissionIdCurrentSelect] = useState(0);
  const [permissions, setPermissions] = useState([]);
  const [allPermissions, setAllPermissions] = useState([]);

  const [isLoadingPermissions, setIsLoadingPermissions] = useState(false);
  const [isOkLoading, setIsOkLoading] = useState(false);
  
  useEffect(() => {
    if (roleId !== undefined) {
      setIsLoadingPermissions(true);
      roleApi
        .getPermissions(roleId)
        .then((res) => {
          setPermissions(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setIsLoadingPermissions(false);
    }
  }, [roleId]);

  const revokePermission = (roleId, permissionId) => {
    setIsOkLoading(true);

    roleApi
      .revokePermissionByRole(roleId, permissionId)
      .then((res) => {

        roleApi
          .getPermissions(roleId)
          .then((res) => {
            setPermissions(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });

      })
      .catch((err) => {
        console.log(err);
      });

    setIsOkLoading(false);
    setIsDisplayModalConfirmDelete(false);
  };

  const loadAllPermissions = () => {
    setIsLoadingPermissions(true);
    permissionApi.getAll().then((res) => {
      setAllPermissions(res.data.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoadingPermissions(false);
  }

  const onClickButtonSavePermission = () => {

    setIsOkLoading(true);

    roleApi.assignPermission(roleId, permissionIdCurrentSelect).then((res) => {
      setIsDisplayModalAddPermission(false);

      roleApi
        .getPermissions(roleId)
        .then((res) => {
          setPermissions(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });

    }).catch((err) => {
      console.log(err);
    });

    setIsOkLoading(false);
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-sm w-4/6 text-gray-500">
          Add Permissions to this Role. Users who have this Role will receive
          all Permissions below that match the API of their login request.
        </span>
        <ButtonField
          title={"Add Permissions"}
          onClick={() => {setIsDisplayModalAddPermission(true); loadAllPermissions();}}
          className={"my-6"}
        />
      </div>

      {isLoadingPermissions ? (
        <Spinner type={SpinnerType.medium} />
      ) : (
        <Table columns={ColumnsPermission}>
          {permissions && permissions.length > 0 ? (
            permissions.map((value) => (
              <Row key={value.id}>
                <td className={RowStyle.className}> {value.id}</td>
                <td className={RowStyle.className}> {value.code}</td>
                <td className={RowStyle.className}> {value.name}</td>
                <td className={RowStyle.className}>
                  {" "}
                  {value.isSystem.toString()}
                </td>
                <td className={RowStyle.className}> {value.description}</td>
                <td className={RowStyle.className}>
                  <img
                    src={IconDelete}
                    className="scale-75 "
                    alt="delete"
                    onClick={() => {
                      setItemCurrent(value);
                      setIsDisplayModalConfirmDelete(true);
                    }}
                  />
                </td>
              </Row>
            ))
          ) : (
            <tr>
              <td className="text-center text-gray-600">No data</td>
            </tr>
          )}
        </Table>
      )}

      <Pagination pageNumber={1} pageSize={10} totalItems={100} />

      <ModalCrud
        isDisplayModal={isDisplayModalConfirmDelete}
        onCancel={() => setIsDisplayModalConfirmDelete(false)}
        onOk={() => revokePermission(roleId, itemCurrent.id)}
        isOkLoading={isOkLoading}
        typeButtonOk={TypeButton.DELETE}
        title={"Delete Permission"}
        titleOk="Delete"
      >
        <p className="text-sm text-gray-500">
          {" "}
          Do you want to delete <b>{itemCurrent.name}</b> permission?
        </p>
      </ModalCrud>

      <ModalCrud
        isDisplayModal={isDisplayModalAddPermission}
        onCancel={() => setIsDisplayModalAddPermission(false)}
        onOk={() => onClickButtonSavePermission()}
        isOkLoading={isOkLoading}
        typeButtonOk={TypeButton.PRIMARY}
        title={"Add Permission"}
        titleOk="Save"
      >
        <label htmlFor="permissions">Select a permission</label>
            <br/><br/>
      <select name="permissions" id="permissions" className="text-slate-500 w-3/5 p-1 rounded-lg border-2 focus:outline-none focus:border-indigo-400 " onChange={(e) => setPermissionIdCurrentSelect(e.target.value)}>
        {
          allPermissions.map((value, key) => (
            <option value={value.id} id={value.id} className="px-4 py-2 hover:bg-gray-100 focus:border-indigo-400">
              {value.code} - {value.name}
            </option>
          ))
        }
      </select>
      </ModalCrud>
    </>
  );
};

export default RolePermissionTable;
