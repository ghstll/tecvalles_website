import AdminPanel from "../../components/admin-panel/adminPanel"
import CoursesTeacher from "../../components/courses_teacher/coursesTeacher"
function AdminContent(){
    return(
        <main className="w-full h-full bg-[#edebeb] flex flex-col items-center gap-32">
                <AdminPanel>
                    
                </AdminPanel>
                <CoursesTeacher></CoursesTeacher>
        </main>
    )

    
}
export default AdminContent 