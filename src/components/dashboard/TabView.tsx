import React, { SetStateAction, useState } from "react";
import { TabItem } from "./TabItem";
import { TabPanel } from "./TabPanel";
import { DateCard } from "./DateCard";
import { TTab } from "../../interfaces";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import dayjs from "dayjs";

import "./styles/DateRangePicker.css";
import "./styles/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type TTabViewProps = {
    tabs: TTab[];
    dateRange: Value;
    setDateRange: React.Dispatch<SetStateAction<[Date, Date]>>;
};

export const TabView = ({ tabs, dateRange, setDateRange }: TTabViewProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const [open, setOpen] = useState(true);
	const currentDate = new Date(Date.now());
    const pastWeekDate = dayjs(currentDate).add(-7, "day").toDate();

    const [value, onChange] = useState<Value>([pastWeekDate, currentDate]);

    let fromDate = "";
    let toDate = "";

    if (value) {
        const dates = value.toString().split(",");
        fromDate = dayjs(dates[0]).format("MMM D, YYYY");
        toDate = dayjs(dates[1]).format("MMM D, YYYY");
    }

    const startColor="#489ad2"
    const endColor="#6fc2f3"

    return (
        <div className={`collapse bg-white border rounded-lg drop-shadow-md ${
            open ? "collapse-open" : "collapse-close"
        }`}>
            <div className="flex collapse-title p-2 items-center ">
                <div className="flex-1 gap-1 tabs tabs-boxed !bg-white *:flex-1">
                    {tabs?.map((tab: TTab, index: number) => (
                        <TabItem
                            key={tab?.id}
                            label={tab?.label}
                            isActive={index === activeTab}
                            clickHandler={() => setActiveTab(index)}
                        />
                    ))}
                </div>
                <div>
                    <DateRangePicker
                        onChange={(value) => {
                            setDateRange(value as [Date, Date]);
                            onChange(value);
                        }}
                        value={dateRange}
                        calendarClassName={"border rounded-[8px]"}
                        locale="en-US"
                        maxDate={currentDate}
                        format="dd-MM-y"
                        clearIcon={null}
                    />
                </div>
                <button
                    onClick={() => {setOpen(!open)}}
                    className="pointer-events-auto mx-3"
                >
                    {
                        open
                        ? <img src="/chevron-down-solid.svg" width={14} alt="toggle" />
                        : <img src="/chevron-up-solid.svg" width={14} alt="toggle" />
                    }
                </button>
            </div>
            <div className="collapse-content mr-4">
                <div className="mx-auto">
                    {tabs?.map((tab: TTab, index: number) => (
                        <TabPanel key={tab?.id} isActive={index === activeTab}>
                            {tab?.content}
                        </TabPanel>
                    ))}
                </div>
                <div className="flex gap-2 justify-end mr-2">
                    <div>
                        <DateCard
                            fromDate={fromDate}
                            toDate={toDate}
                            startColor={startColor}
                            endColor={endColor}
                        />
                    </div>
                    <div>
                        <DateCard
                            fromDate={fromDate}
                            toDate={toDate}
                            startColor={startColor}
                            endColor={endColor}
                            strokeDashArray="4 2"
                            opacity="0.3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
