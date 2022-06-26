export default class Product {
  constructor(id, name, price, type, info, tags, imgSrc) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.type = type;
    this.info = info;
    this.tags = tags;
    this.src = imgSrc;
  }

  get imgOne() {
    return this.src[0];
  }

  get imgTwo() {
    return this.src[1];
  }

  get value() {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(this.price);
  }
}
