class mylaptop{
    constructor(brand,model,price)
    {
         this.brand = brand
         this.model = model
         this.price = price
    }
    showDetail(){
        console.log(`Brand :  ${this.brand}`);
        console.log(`Model :  ${this.model}`);
        console.log(`Price :  ${this.price}`);
    }
}



let L = new mylaptop("Dell","XPS 15",1500)

L.showDetail()
