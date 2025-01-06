import Home_icon from "../../assets/aside-svg/home_icon";
import AsideButtons from "./asideButtons";
function AsideButtonsSection() {
    return (
        <section className="w-full flex ml-7 mt-6">
            <ul className="w-full flex flex-col gap-4">
                <li>
                    <AsideButtons
                        name={"Inicio"}
                        icon={<Home_icon></Home_icon>}
                    ></AsideButtons>
                </li>{" "}
                <li>
                    <AsideButtons
                        name={"Inicio"}
                        icon={<Home_icon></Home_icon>}
                    ></AsideButtons>
                </li>{" "}
                <li>
                    <AsideButtons
                        name={"Inicio"}
                        icon={<Home_icon></Home_icon>}
                    ></AsideButtons>
                </li>
            </ul>
        </section>
    );
}

export default AsideButtonsSection;


