import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import RoleDashboard from "./pages/role/RoleDashboard";
import NotFound from "./pages/NotFound";
import PermissionDashboard from "./pages/permission/PermissionDashboard";
import { PATH_AUTH, PATH_DASHBOARD, PATH_USER } from "./routes/paths";
import RoleDetail from "./pages/role/RoleDetail";
import UserCreate from "./pages/user/UserCreate";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        
        <Route path="/" element={<Dashboard />} />
        <Route path={PATH_DASHBOARD.user.list} element={<User />} />
        <Route path={PATH_DASHBOARD.role.list} element={<RoleDashboard />} />
        <Route path={PATH_DASHBOARD.role.edit()} element={<RoleDetail />} />
        <Route path={PATH_DASHBOARD.permission.list} element={<PermissionDashboard />} />
        <Route path="*" element={<NotFound />} />
        
      </Route>
      <Route path={PATH_AUTH.login} element={<SignIn />}/>
      <Route path={PATH_USER.create} element={<UserCreate />}/>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
