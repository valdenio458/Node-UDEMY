import conn from '../db/conn.js';
import { ObjectId } from 'mongodb';

export default class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }

  save() {
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      image: this.image,
      price: this.price,
      description: this.description
    });

    return product;
  }

  static getProducts() {
    const products = conn.db().collection('products').find().toArray();

    return products;
  }

  static async getProductBYId(id) { 
    const product = await conn.db().collection('products').findOne({ _id: ObjectId(id) });

    return product;
  }

  static async removeProductById(id) {
    const product = await conn.db().collection('products').deleteOne({ _id: ObjectId(id) });

    return product;
  }
  
  
}

