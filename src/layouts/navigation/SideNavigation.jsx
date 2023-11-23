import { useState } from "react";
import { PATH_AUTH, PATH_DASHBOARD } from "../../routes/paths";
import { Link } from "react-router-dom";

const SideNavigation = () => {
  const [itemSelected, setItemSelected] = useState(null);

  const items  = [
    {id: 1, code:'DASHBOARD', displayName: 'Dashboard', link: PATH_DASHBOARD.root},
    {id: 2, code:'USER', displayName: 'Users', link: PATH_DASHBOARD.user.list},
    {id: 3, code:'ROLE', displayName: 'Roles', link: PATH_DASHBOARD.role.list},
    {id: 4, code:'PERMISSION', displayName: 'Permissions', link: PATH_DASHBOARD.permission.list},
    {id: 6, code:'LOGOUT', displayName: 'Logout', link: PATH_AUTH.login},
  ]

  const handleOnClickItem = (item) => {
    setItemSelected(item);
  }

    return (
    <div className="py-4 px-2 h-screen w-1/6 min-w-1/6  bg-slate-50 ">
  
      <div className="w-full py-4 px-2 text-gray-900  rounded-lg text-left capitalize font-medium ">
      {
        items.map((item) => (
          <span className={`cursor-pointer py-1 hover:bg-gray-200  rounded block 
          ${itemSelected?.id === item.id ? 'text-indigo-500' : ''}
          `} key={item.id}>
          <Link className="mx-2 text-sm" 
          to={item.link}
          onClick={() => handleOnClickItem(item)}>{item.displayName} 
           </Link>
        </span>
        ))
      } 
      </div>
    </div>
  );
}



export default SideNavigation;