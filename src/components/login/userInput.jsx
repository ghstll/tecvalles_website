function UserInput(){
    return(
        <div className="flex flex-col gap-3">
            <label htmlFor="">Usuario o Correo</label>
            <input type="text" className="border border-gray-700 w-[200px] rounded-md bg-transparent"/>
        </div>
    )
}

export default UserInput