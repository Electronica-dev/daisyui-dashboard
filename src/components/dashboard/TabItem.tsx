import { ListItem } from "./ListItem";
import { TooltipCard } from "./TooltipCard";

type TTabItem = {
    label: string;
    isActive: Boolean;
    clickHandler: () => void;
};
export const TabItem = ({ label, isActive, clickHandler }: TTabItem) => {
    return (
        <div
            className={`flex flex-col items-start h-auto text-l py-2 border-none !rounded-xl cursor-default !text-black tab group/item w-48 hover:!bg-[#f1f1f1] ${
                isActive ? "tab-active !bg-[#f1f1f1]" : ""
            }`}
            onClick={clickHandler}
            onKeyDown={clickHandler}
            role="button"
            tabIndex={0}
        >
            <div className="flex self-stretch justify-between items-start">
                <div className="font-[400] border-b-[1px] border-dashed !border-b-[#cccccc] leading-5 has-custom-tooltip">
                    <TooltipCard title={label} body="Your online store's traffic volume, shown in sessions."/>
                    {label}
                </div>
                <div className="dropdown dropdown-bottom">
                    <button
                        className={`p-[6px] w-[26px] rounded-md hover:bg-[#cbc8c8] ${
                            isActive ? "visible" : "invisible group-hover/item:visible"
                        }`}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    >
                        <img src="/pencil.svg" alt="edit"/>
                    </button>
                    <ul className="flex dropdown-content !p-2 bg-white z-20 shadow-md menu items-start rounded-box w-80 [&>li]:py-1 [&>li]:self-stretch">
                        <ListItem listContent="Average Order Value" />
                        <ListItem listContent="Conversion rate" />
                        <ListItem listContent="Gross Sales" />
                        <ListItem listContent="Net return value" />
                        <ListItem listContent="Store search conversion" />
                        <ListItem listContent="Return rate" />
                    </ul>
                </div>
            </div>
            <div className="flex items-center font-[500] text-xl mt-1">
                12,455
                <img src="/caret-up-fill.svg" width={12} className="m-[1px] ml-2" alt="trending-up" />
                <div className="text-xs font-normal text-[#616161]">
                    9%
                </div>
            </div>

        </div>
    );
};
