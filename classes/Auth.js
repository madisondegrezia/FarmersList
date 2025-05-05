const { Customer } = require('./Customer.js');


class Auth{
    constructor(customers){
        this.customers = [];
    }

    register(name, email, shippingAddress){
        const newCustomer = new Customer(name, email, shippingAddress);
        this.customers.push(newCustomer);
        return newCustomer;
    }

    login(email){
        const customer = this.customers.find(customer => customer.email === email);
        if(customer){
            return customer;
        } else {
           return null;
        }
    }
   
}
module.exports = { 
    Auth 
};