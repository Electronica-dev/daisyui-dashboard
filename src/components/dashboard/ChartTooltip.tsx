import React from "react";
import { LinearGradientLineSVG } from "./LinearGradientLineSVG";
export const ChartTooltip = ({
    active,
    payload,
    label,
    coordinate,
    colors,
    kpi,
}: any) => {
    if (active && payload && payload.length) {
        const dataPoint = payload[0].payload;

        const tooltipStyle = {
            left: coordinate.x, // Adjust positioning
            top: coordinate.y, // Adjust positioning
        };

        const startColor="#489ad2"
        const endColor="#6fc2f3"

        return (
            <div
                className="card-body p-2 shadow-md rounded-xl"
                style={tooltipStyle}
            >
                <div className="text-xs *:p-2">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center mr-3">
                            <LinearGradientLineSVG
                                startColor={startColor}
                                endColor={endColor}
                            />
                        </div>
                        <div className="flex mr-3">

                            <div className="flex text-xs mr-3">{label}</div>
                            <div>
                                {`${kpi}: ${dataPoint.value}`}
                            </div>
                        </div>
                        {dataPoint.valueChangePercentage < 0
                            ?
                                <div className="flex opacity-75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        width={16}
                                        className="mr-1"
                                        opacity={0.75}
                                    >
                                        {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                        <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/>
                                    </svg>
                                    {-dataPoint.valueChangePercentage}%
                                </div>
                            :
                                <div className="flex opacity-75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        width={16}
                                        className="mr-1"
                                        opacity={0.75}
                                    >
                                        {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                        <path d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352H384z"/>
                                    </svg>
                                    {dataPoint.valueChangePercentage}%
                                </div>
                        }
                    </div>
                    <div className="flex items-center">
                        <div
                            className="flex items-center justify-center mr-3"
                        >
                            <LinearGradientLineSVG
                                startColor={startColor}
                                endColor={endColor}
                                strokeDasharray="4 2"
                                opacity="0.3"
                            />
                        </div>
                        <div className="flex">
                            <div className="flex text-xs mr-3">{label}</div>
                            <div>
                                {`${kpi}: ${dataPoint.sampleValue}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};
