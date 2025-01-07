import PropTypes from "prop-types";

function AdminPanelButtons({ text, icon ,openModal}) {
    return (
        <button className="flex bg-[#dfdfdf] p-3 rounded-md gap-2 hover:bg-[#c4c4c4] duration-500 font-OpenSans" onClick={openModal}>
            {text}
            {icon}
        </button>
    );
}

AdminPanelButtons.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.object,
    openModal: PropTypes.func
};

export default AdminPanelButtons;

