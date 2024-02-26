import { ITooltipCard } from "../../interfaces"

export const TooltipCard = ({
    title,
    body,
}: ITooltipCard) => {
    return (
        <div className="card bg-white shadow-md !p-2 w-96 rounded-xl items-start custom-tooltip top-10">
            <div className={`card-title p-1 text-[16px] font-[500]`}>
                {title}
            </div>
            <div className="card-body !p-1">
                {body}
            </div>
        </div>
    )
}