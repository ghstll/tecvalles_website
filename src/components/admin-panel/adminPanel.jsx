import PropTypes from "prop-types";
import Settings_icon from "../../assets/admin-panel/settings_icon";
import Students_icon from "../../assets/admin-panel/students_icon";
import Users_group_icon from "../../assets/admin-panel/users_group_icon";
import AdminPanelButtons from "./adminPanelButtons";

function AdminPanel({ openModal  }) {
    return (
        <div className="w-fit bg-gray-100 h-fit flex flex-col items-center p-4 gap-5 mt-7 rounded-md">
            <header>
                <h1 className="font-Roboto">Panel de Administrador</h1>
            </header>
            <section className="grid grid-cols-3 gap-3">
                <AdminPanelButtons
                    openModal={openModal}
                    text={"Administrar cursos"}
                    icon={<Settings_icon></Settings_icon>}
                ></AdminPanelButtons>
                <AdminPanelButtons
                    openModal={openModal}
                    text={"Administrar estudiantes"}
                    icon={<Students_icon></Students_icon>}
                ></AdminPanelButtons>
                <AdminPanelButtons
                    openModal={openModal}
                    text={"Administrar profesores"}
                    icon={<Users_group_icon></Users_group_icon>}
                ></AdminPanelButtons>
            </section>
        </div>
    );
}

AdminPanel.propTypes = {
    openModal: PropTypes.func,
};

export default AdminPanel;







