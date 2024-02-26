export interface IOrder {
    id: number;
    user: IUser;
    createdAt: string;
    status: IOrderStatus;
    adress: IAddress;
    amount: number;
}

export interface IUser {
    id: number;
    fullName: string;
    gender: string;
    gsm: string;
    createdAt: string;
    addresses: IAddress[];
}

export interface IOrderStatus {
    id: number;
    text: "Pending" | "Ready" | "On The Way" | "Delivered" | "Cancelled";
}

export interface IAddress {
    text: string;
    coordinate: [string, string];
}

export interface IChartDatum {
    date: string;
    value: number;
}

export interface IChart {
    data: IChartDatum[];
    total: number;
    trend: number;
}

export interface IProduct {
    id: number;
    name: string;
    isActive: boolean;
    description: string;
    createdAt: string;
    price: number;
    category: ICategory;
    stock: number;
}

export interface ICategory {
    id: number;
    title: string;
    isActive: boolean;
}

export interface ILinearGradientLineSVG {
    width?: string;
    height?: string;
    startColor: string;
    endColor: string;
    opacity?: string;
    strokeDasharray?: string;
}

export interface IDateCard {
    fromDate: string;
    toDate: string;
    startColor: string;
    endColor: string;
    strokeDashArray?: string;
    opacity?: string;
}

export interface ITooltipCard {
    title: string;
    body: string;
}

export type TTab = {
    id: number;
    label: string;
    content: JSX.Element;
};
