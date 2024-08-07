import { BoxType } from '@/enums/boxEnums';

export interface TBox {
    id: number;
    boxImg: string;
    status: BoxType;
    title: string;
    authorPic: string;
    authorName: string;
}

export type TBoxDetail = {
    id: number;
    boxImg: string;
    title: string;
    authorPic: string;
    authorName: string | '-';
    desc: string;
    sellLimit: number;
    onSale: number;
    price: number;
    priceUnit: string;
    onSaleTime: number;
};

export interface TFeedItem {
    id: number;
    boxImg: string;
    title: string;
    authorPic: string;
    authorName: string;
}
