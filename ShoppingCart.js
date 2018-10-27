//ShoppingCart

class ShoppingCart {
    constructor(cart) {
        this.cart = cart
        this.items = []
    }

    addItem(itemName, quantity, price){
        this.items.push(itemName, quantity, price )
    }

    getItems(){
        this.items
    }

    total() {
        this.items.map(item => item.getTotalValueOfItems()).reduce((a,b) => a + b, 0)
    }

    clear(){
        this.items = []
    }
}

class Cart extends ShoppingCart{
    super(cart)
}


module.exports.ShoppingCart = ShoppingCart