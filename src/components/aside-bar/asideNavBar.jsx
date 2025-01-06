import AsideButtonsSection from "./asideButtonsSection";
import AsideLogo from "./asideLogo";
function AsideNavBar() {
    return (
        <aside className="h-full w-fit bg-[#f6f6f6] p-3">
            <section className="flex flex-col items-center gap-3">
                <AsideLogo></AsideLogo>
                <hr className="w-11/12 border border-gray-400" />
            </section>
            <AsideButtonsSection></AsideButtonsSection>
        </aside>
    );
}

export default AsideNavBar;
