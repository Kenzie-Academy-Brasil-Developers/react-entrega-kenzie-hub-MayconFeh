import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"
import { UserPage } from "../pages/UserPage/UserPage"
import { ProtectRoutes } from "../components/ProtectRoutes/Index"
import { PublicRoutes } from "../components/PublicRoutes/Index"
import { TechProvider } from "../providers/TechContext"


export const RoutesMain = () => {




  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectRoutes />}>
        <Route path="/user" element={
        <TechProvider>
          <UserPage />
        </TechProvider>
        } />
      </Route>
    </Routes>
  )
}