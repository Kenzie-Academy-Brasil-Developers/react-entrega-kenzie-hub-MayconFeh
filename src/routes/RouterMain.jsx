import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"
import { UserPage } from "../pages/UserPage/UserPage"


export const RoutesMain =  () => {




    return (
        <Routes>
            <Route path="/"  element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/user"  element={<UserPage/>} />
        </Routes>
    )
}