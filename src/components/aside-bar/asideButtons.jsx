import PropTypes from "prop-types"

function AsideButtons({name,icon}){
    return(
        <button className="flex items-center font-semibold gap-3  font-OpenSans  p-2 w-[200px] rounded-md hover:bg-[#2f97ff10] hover:text-blue-600 duration-300">
            {icon}
            {name}
        </button>
    )
}


AsideButtons.propTypes = {
    name : PropTypes.string,
    icon : PropTypes.object
}

export default AsideButtons


