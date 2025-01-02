import loginBackgroundImage from "../assets/loginBackgroundImage.png";
import PasswordInput from "../components/login/passwordInput";
import UserInput from "../components/login/userInput";

function Login() {
    return (
        <div className="flex p-2 relative  h-full w-full">
            <section
                style={{
                    backgroundImage: `url(${loginBackgroundImage})`,
                }}
                className="w-1/2 h-full bg-center relative bg-no-repeat bg-cover overflow-hidden bg-fixed"
            >
                <div className="absolute top-0 left-0 w-full h-full filter blur-[5px] bg-black opacity-40"></div>

                <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[5px] flex flex-col justify-center items-center text-white    ">
                    <h1>Hola amigos</h1>
                </div>
            </section>
            <section className="flex flex-col gap-5  h-fit w-1/2 p-12 rounded-xl items-center">
                <section>
                    <h1 className="text-2xl">¡Bienvenido de nuevo!</h1>
                    <h4 className="text-xs">
                        Continua con tu usuario o correo institucional.
                    </h4>
                </section>
                <form action="" method="post">
                    <UserInput></UserInput>
                    <PasswordInput></PasswordInput>
                </form>
            </section>
        </div>
    );
}

export default Login;
