import AsideNavBar from "../../components/aside-bar/asideNavBar"
import AdminContent from "./adminContent"
function AdminHome (){
    return(
        <div className="h-full w-full flex">
            <AsideNavBar></AsideNavBar>
            <AdminContent></AdminContent>
        </div>
        
    )
}

export default AdminHome
