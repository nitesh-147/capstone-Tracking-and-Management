export interface IInventory{
    id?:string;
    userId:string;
    items:IInventoryItem[];
    location:string;
    TransferStatus?:string;
    destination?:string;
}

export interface IInventoryItem{
    name:string;
    quantity:number;
}