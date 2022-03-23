 
 export interface Iproduct  
{
    ID:number;
    Name:string;
    Quantity:number;
    price :number
    img:string
}


export interface Icategory  
{
    ID:number;
    Name:string;
}
export enum DiscoundOffers 
{
    val1="Nodiscount",
    val2="10",
    val3="15"
}
export enum DiscoundOffers1
{
    val1="Nodiscount",
    val2="10%",
    val3="15%"
}
export class login{
    constructor(
        public email:string,
        public password:string,

    )
    {

    }
}


export class usersinfo{
    constructor (
        public Name:string,
        public email:string,
        public password:string,
        public topic:string,
    ){

    }
}