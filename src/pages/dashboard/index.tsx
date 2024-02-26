import React, { useMemo, useState, useEffect } from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import Stats from "../../components/dashboard/Stats";
import { ResponsiveAreaChart } from "../../components/dashboard/ResponsiveAreaChart";
import { ResponsiveBarChart } from "../../components/dashboard/ResponsiveBarChart";
import { TabView } from "../../components/dashboard/TabView";
import { RecentSales } from "../../components/dashboard/RecentSales";
import { IChartDatum, TTab } from "../../interfaces";

export const Dashboard: React.FC = () => {
    const currentDate = new Date(Date.now());
    const pastWeekDate = dayjs(currentDate).add(-7, "day").toDate();

    const [filters, setFilters] = useState<CrudFilter[]>([]);

    const { data: dailyRevenue } = useList<IChartDatum>({
        resource: "dailyRevenue",
        filters,
    });

    const { data: dailyOrders } = useList<IChartDatum>({
        resource: "dailyOrders",
        filters,
    });

    const { data: newCustomers } = useList<IChartDatum>({
        resource: "newCustomers",
        filters,
    });

    const [dateRange, setDateRange] = useState<[Date, Date]>([pastWeekDate, currentDate]);

    const updateFilters = (startDate: Date, endDate: Date) => {
        setFilters([
            {
                field: "start",
                operator: "eq",
                value: dayjs(startDate).startOf("day").add(1, "day").toDate(),
            },
            {
                field: "end",
                operator: "eq",
                value: dayjs(endDate).startOf("day").add(1, "day").toDate(),
            },
        ]);
    };

    useEffect(() => {
        updateFilters(dateRange[0], dateRange[1]);
    }, [dateRange]);

    const useMemoizedChartData = (d: any) => {
        return useMemo(() => {
            return d?.data?.data?.map((item: IChartDatum) => ({
                date: new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    year: "numeric",
                    day: "numeric",
                }).format(new Date(item.date)),
                value: item?.value,
            }));
        }, [d]);
    };

    const memoizedRevenueData = useMemoizedChartData(dailyRevenue);
    const memoizedOrdersData = useMemoizedChartData(dailyOrders);
    const memoizedNewCustomersData = useMemoizedChartData(newCustomers);

    //adding sample data so that the secondary line can be rendered
    let sampleData: IChartDatum[] = [];
    if (memoizedRevenueData) {
        sampleData = Array.from(
            memoizedRevenueData,
            (x: IChartDatum) => {
                const value = Number(x.value)
                const sampleValue = value + (Math.floor(Math.random() * 500) - 250)
                const valueChangePercentage = (sampleValue - value) / 100
                return {
                    date: x.date,
                    value: value,
                    sampleValue,
                    valueChangePercentage,
                }
            }
        )
    }

    const tabs: TTab[] = [
        {
            id: 1,
            label: "Online store sessions",
            content: (
                <ResponsiveAreaChart
                    kpi="Daily revenue"
                    data={sampleData}
                    colors={{
                        stroke: "rgb(54, 162, 235)",
                        fill: "rgba(54, 162, 235, 0.2)",
                    }}
                />
            ),
        },
        {
            id: 2,
            label: "Net return value",
            content: (
                <ResponsiveBarChart
                    kpi="Daily orders"
                    data={memoizedOrdersData}
                    colors={{
                        stroke: "rgb(255, 159, 64)",
                        fill: "rgba(255, 159, 64, 0.7)",
                    }}
                />
            ),
        },
        {
            id: 3,
            label: "Total orders",
            content: (
                <ResponsiveAreaChart
                    kpi="New customers"
                    data={memoizedNewCustomersData}
                    colors={{
                        stroke: "rgb(76, 175, 80)",
                        fill: "rgba(54, 162, 235, 0.2)",
                    }}
                />
            ),
        },
        {
            id: 4,
            label: "Conversion rate",
            content: (
                <ResponsiveAreaChart
                    kpi="New customers"
                    data={memoizedNewCustomersData}
                    colors={{
                        stroke: "rgb(76, 175, 80)",
                        fill: "rgba(54, 162, 235, 0.2)",
                    }}
                />
            ),
        },
    ];

    return (
        <>
            <Stats
                dailyRevenue={dailyRevenue}
                dailyOrders={dailyOrders}
                newCustomers={newCustomers}
            />
            <TabView
                tabs={tabs}
                dateRange={dateRange}
                setDateRange={setDateRange}
            />
            <RecentSales />
        </>
    );
};
