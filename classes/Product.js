class Product {
  constructor(name, price, description, inStock) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.inStock = true;
  }
  display() {
    // "Name: <NAME>, Price: $<PRICE>, Description: <DESCRIPTION>"
    return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`;
  }
}

module.exports = {
  Product,
};
