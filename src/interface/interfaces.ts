export interface FoodType {
    id: string;
    name: string;
    color: string;
    sheduleStart: number;
    sheduleEnd: number;
    items: Array<Item>;
}
export interface Item {
    id: string;
    name: string;
    description: string;
}
export interface Food {
    id: string;
    name: string;
    desc: string;
    price: number;
    img: string;
    type: [FoodType];
    createdAt: Date;
    updatedAt: Date;
}
