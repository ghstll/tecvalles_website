import userIcon from "../../assets/login/user.svg";
function UserInput() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex">
                <label htmlFor="">Usuario o Correo</label>
                <img src={userIcon} alt="" />
            </div>
            <input
                type="text"
                className="border border-gray-700  rounded-md bg-transparent text-lg p-1 w-[400px]"
            />
        </div>
    );
}

export default UserInput;
