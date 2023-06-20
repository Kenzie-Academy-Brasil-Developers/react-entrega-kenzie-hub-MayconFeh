import { UserFeed } from "../../components/User/UserFeed/Index"
import { Header } from "../../components/User/UserHeader/Index"
import { UserInfo } from "../../components/User/UserInfo/Index"

export const UserPage = () => {
    return(
       <>
       <Header/>
       <UserInfo/>
       <UserFeed/>
       </>
    )
}