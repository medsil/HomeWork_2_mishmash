// items
class Item {
    constructor(quantity) {
        this.quantity = quantity
    }
    getTotalValueOfItems(){
        return this.quantity * this.pricePerUnit
    }
}

class Milk extends Item {
    constructor(quantity) {
        super(quantity)
        this.pricePerUnit = 2
   }
    
}

class Cereal extends Item {
    constructor(quantity) {
        super(quantity)
        this.pricePerUnit = 4
    }
}   

module.exports = { Milk, Cereal }
