import {
    ResponsiveContainer,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
} from "recharts";
import { ChartTooltip } from "../../components/dashboard/ChartTooltip";
import { IChartDatum } from "../../interfaces";

type TResponsiveAreaChartProps = {
    kpi: string;
    data: IChartDatum[];
    colors: {
        stroke: string;
        fill: string;
    };
};

export const ResponsiveAreaChart = ({
    kpi,
    data,
    colors,
}: TResponsiveAreaChartProps) => {
    return (
        <ResponsiveContainer height={400}>
            <LineChart
                data={data}
                height={400}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id="colorSolid" x1={0} y1={0} x2="100%" y2={0}>
                        <stop offset="0%" stopColor="#489ad2"/>
                        <stop offset="100%" stopColor="#6fc2f3"/>
                    </linearGradient>
                    <linearGradient id="colorDashed" x1={0} y1={0} x2="100%" y2={0}>
                        <stop offset="0%" stopColor="#daebf6"/>
                        <stop offset="100%" stopColor="#e2f3fc"/>
                    </linearGradient>
                </defs>
                <CartesianGrid
                    strokeDasharray="0 0 0"
                    vertical={false}
                    opacity={0.25}
                />
                <XAxis
                    dataKey="date"
                    tickCount={data?.length ?? 0}
                    tick={{
                        stroke: "light-grey",
                        strokeWidth: 0.5,
                        fontSize: "12px",
                    }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    tickCount={20}
                    tick={{
                        stroke: "light-grey",
                        strokeWidth: 0.5,
                        fontSize: "12px",
                    }}
                    interval="preserveStartEnd"
                    domain={[0, "dataMax + 10"]}
                    axisLine={false}
                    tickLine={false}
                />
                <Tooltip
                    content={<ChartTooltip kpi={kpi} colors={colors} />}
                    wrapperStyle={{
                        backgroundColor: "#ffffff",
                        border: "0 solid #000",
                        borderRadius: "10px",
                    }}
                    position={{y: 160}}
                    isAnimationActive={false}
                />
                <Line
                    strokeDasharray="10 5"
                    type="monotone"
                    dataKey="sampleValue"
                    strokeWidth={3}
                    dot={false}
                    activeDot={false}
                    // opacity={0.3}
                    stroke="url(#colorDashed)"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
                <Line
                    type="monotone"
                    dataKey="value"
                    strokeWidth={3}
                    dot={false}
                    activeDot={false}
                    stroke="url(#colorSolid)"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
