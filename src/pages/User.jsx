import ButtonField from "../components/form/ButtonField";
import Label from "../components/form/Label";
import TableField from "../components/table/TableField";
import { ColumnsUser } from "../mocks/columns";
import { UsersRow } from "../mocks/users";

const User = () => {



  return (
    <div>
      <div className="flex justify-between" >
      <Label title="Users" size = 'xl' />
      <ButtonField title="Create User" />
      </div>

      {/* <table className="w-full text-sm text-left table-fixed ">
        <thead className ="text-xs font-normal">
        <tr>
                <th scope="col" className="px-3 py-3">
                    Full Name
                </th>
                <th scope="col" className="px-3 py-3">
                    Email
                </th>
                <th scope="col" className="px-3 py-3">
                    Role
                </th>
                <th scope="col" className="px-3 py-3">
                    Status
                </th>
                <th scope="col" className="px-3 py-3">
                    Latest Login
                </th>
            </tr>
        </thead>
        <tbody>
          <tr  className="hover:bg-gray-200 cursor-pointer" >
            <td className="px-3 py-3 flex items-center"> 
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="Avatar" className="object-cover rounded-full w-4 h-4 mr-2" />  Steve Bang
            </td>
            <td className="px-3 py-3">mrsteve.bang@gmail.com</td>
            <td className="px-3 py-3">End_User</td>
            <td className="px-3 py-3">Active</td>
            <td className="px-3 py-3">{new Date().toDateString()}</td>
            <td className="px-3 py-3">...</td>
          </tr>

        </tbody>
      </table> */}

      <TableField columns={ColumnsUser} rows={UsersRow} />
    </div>
  );
};

export default User;
