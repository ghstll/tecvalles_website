import loginBackgroundImage from "../assets/loginBackgroundImage.png";
import PasswordInput from "../components/login/passwordInput";
import UserInput from "../components/login/userInput";
function Login() {
    return (
        <div className="flex  relative  h-full w-full gap-5 ">
            <div className="w-full h-full flex  bg-[#e4e4e4]">
                <section className="flex flex-col gap-5  h-full w-1/2 p-12   justify-center items-center animate-[appear_1s_ease-in-out_1]">
                    <div className="p-10 flex flex-col gap-10 border border-gray-600 rounded-xl">
                        <section className="flex flex-col justify-center items-center">
                            <h1 className="text-2xl">¡Bienvenido de nuevo!</h1>
                            <h4 className="text-xs">
                                Continua con tu usuario o correo institucional.
                            </h4>
                        </section>
                        <form action="" method="post" className="flex flex-col gap-8">
                           
                            <UserInput></UserInput>
                            <PasswordInput></PasswordInput>
                            <button className="border border-gray-800 p-3 rounded-md hover:bg-[#204ba5] hover:text-white duration-700">Iniciar Sesion</button>
                            <div className="flex items-center gap-20 justify-between">
                                <div className="flex gap-1">
                                    <label htmlFor="remember-me-checkbox">Recuerdame</label>
                                    <input type="checkbox" id="remember-me-checkbox" className="relative top-0.5"/>
                                </div>
                                <div>
                                    <a href="" className="hover:underline">Olvide mi contraseña</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <section
                    style={{
                        backgroundImage: `url(${loginBackgroundImage})`,
                    }}
                    className="w-1/2 h-full bg-center relative bg-no-repeat bg-cover overflow-hidden bg-fixed "
                >
                    <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[5px] flex flex-col justify-center items-center text-white    ">
                        <h1>Hola amigos</h1>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Login;
