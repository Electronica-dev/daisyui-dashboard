import { ILinearGradientLineSVG } from "../../interfaces"

export const LinearGradientLineSVG = ({
    width,
    height,
    startColor,
    endColor,
    opacity,
    strokeDasharray,
}: ILinearGradientLineSVG) => {
    const randomId = self.crypto.randomUUID();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
                // stroke: "black",
                width: width ?? "16px",
                height: height ?? "3px",
                borderRadius: "4px"
            }}

        >
            <defs>
                <linearGradient
                    id={`linear-gradient-line-${randomId}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0%" stopColor={startColor}/>
                    <stop offset="100%" stopColor={endColor}/>
                </linearGradient>
            </defs>
                <line
                    x1="0" y1="0" x2="100%" y2="0"
                    strokeWidth="8"
                    strokeDasharray={strokeDasharray ?? "0 0 0"}
                    opacity={opacity ?? "1.0"}
                    stroke={`url(#linear-gradient-line-${randomId})`}
                >
                </line>
        </svg>
    )
}