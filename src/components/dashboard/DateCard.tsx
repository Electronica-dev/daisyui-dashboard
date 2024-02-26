import { IDateCard } from "../../interfaces"
import { LinearGradientLineSVG } from "./LinearGradientLineSVG"

export const DateCard = ({
    fromDate,
    toDate,
    startColor,
    endColor,
    strokeDashArray,
    opacity
}: IDateCard) => {
    return (
        <div className="card">
            <div className="card-body bg-[#f6f6f7] !p-1 w-64 rounded-sm flex-row items-center text-[#70707a]">
                <div className="px-2">
                    <LinearGradientLineSVG
                        startColor={startColor}
                        endColor={endColor}
                        strokeDasharray={strokeDashArray}
                        opacity={opacity}
                    />
                </div>
                {fromDate} - {toDate}
            </div>
        </div>
    )
}