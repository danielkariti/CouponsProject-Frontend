export class Coupon{
    public constructor(
        public id?:number,
        public title?:string,
        public couponStock?:number,
        public price?:number,  
        public image?:string,
        public description?:string,
        public category?:string,
        public expirationDate?:Date
    ){}

}