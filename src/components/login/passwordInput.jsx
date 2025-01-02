function PasswordInput() {
    return (
        <div className="flex flex-col gap-3">
            <label htmlFor="password_input">Contraseña</label>
            <input type="password" id="password_input" className="border border-gray-700 w-[200px] rounded-md bg-transparent"/>
        </div>
    );
}

export default PasswordInput;
