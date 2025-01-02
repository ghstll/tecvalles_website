import logo_tecvalles from "../assets/logo_tecvalles.png";

function SimpleHeader() {
    return (
        <header className="p-2 bg-gray-50">
            <div className="flex items-center gap-3">
                <img
                    src={logo_tecvalles}
                    alt="Tecnologico Nacional de Mexico Ciudad Valles"
                    className="h-[45px]"
                />
                <div className="flex flex-col w-fit h-fit items-center font-Roboto">
                    <h4 className="text-lg">Tecnologico Nacional de Mexico</h4>
                    <h4 className="text-base">Ciudad Valles</h4>
                </div>
            </div>
        </header>
    );
}

export default SimpleHeader;
