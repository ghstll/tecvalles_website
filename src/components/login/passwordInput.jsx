import { useState } from "react";
import blockSeePasswordIcon from "../../assets/login/eye-off.svg";
import seePasswordIcon from "../../assets/login/eye.svg";
import passwordIcon from "../../assets/login/key.svg";
function PasswordInput() {

    
    const [eye, setEye] = useState(seePasswordIcon);
    
    const passwordInput = document.getElementById("password_input")

    const handleSeePassword = () => {
        if (eye != seePasswordIcon) {
            setEye(seePasswordIcon);
        } else {
            setEye(blockSeePasswordIcon);
        }
        if(passwordInput.type === "password"){
            passwordInput.type = "text"
        }else{
            passwordInput.type = "password"
        }
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center">
                <label htmlFor="password_input">Contraseña</label>
                <img src={passwordIcon} alt="" className="relative top-0.5" />
            </div>
            <div className="flex justify-between">
                <input
                    type="password"
                    id="password_input"
                    className="border border-gray-700  rounded-md bg-transparent text-xl p-1 w-[400px]"

                />
                <button type="button" className="cursor-default" onClick={handleSeePassword}>
                    <img
                        src={eye}
                        alt=""
                        className="relative left-5"
                    />
                </button>
            </div>
        </div>
    );
}

export default PasswordInput;
