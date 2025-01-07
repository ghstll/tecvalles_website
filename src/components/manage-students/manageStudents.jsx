import { useState } from "react"

import StudentCard from "./studentCard"

function ManageStudents(){


    const [isModalOpen, setIsModalOpen] = useState(false)
    const openManageStudents = ()=>{
        setIsModalOpen(true)    
    }
    const closeManageStudents = () =>{
        setIsModalOpen(false)
    }

    

    return(
        <div className="hidden overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50">
            <div>
                <StudentCard></StudentCard>
            </div>
        </div>
    )
}

export default ManageStudents





