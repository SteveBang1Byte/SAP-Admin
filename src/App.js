import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNavigation from "./layouts/nivigation/SideNavigation";
import SignIn from "./pages/SignIn";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Role from "./pages/Role";
import NotFound from "./pages/NotFound";
import Permission from "./pages/Permission";
import { PATH_AUTH, PATH_DASHBOARD } from "./routes/paths";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={PATH_DASHBOARD.root} element={<MainLayout />}>
        
        <Route index element={<Dashboard />} />
        <Route path={PATH_DASHBOARD.user.list} element={<User />} />
        <Route path={PATH_DASHBOARD.role.list} element={<Role />} />
        <Route path={PATH_DASHBOARD.permission.list} element={<Permission />} />
        <Route path="*" element={<NotFound />} />
        
      </Route>
      <Route path={PATH_AUTH.login} element={<SignIn />}/>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
