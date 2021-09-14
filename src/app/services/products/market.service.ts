import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../Models/product.model';

@Injectable({providedIn: 'root'})

export class MarketService {

  products: BehaviorSubject<Array<Product>> ;


  constructor() {

    const productsToPush = [
      new Product('Produit 1', 'Disponible'),
      new Product('Produit 2', 'Disponible'),
      new Product('Produit 3', 'Non Disponible'),
      new Product('Produit 4', 'Non Disponible'),
      new Product('Produit 5', 'Disponible'),
      new Product('Produit 6', 'Non Disponible'),
      new Product('Produit 7', 'Non Disponible'),
      new Product('Produit 8', 'Non Disponible'),
      new Product('Produit 9', 'Disponible'),
      new Product('Produit 10', 'Disponible'),
      new Product('Produit 11', 'Disponible')
    ];
    this.products = new BehaviorSubject<Array<Product>>(productsToPush);

  }
  switchAllProductsStatus(newStatus: string) {

    const productsToEdit = this.products.getValue();

    productsToEdit.forEach(product => product.status = newStatus);

    this.products.next(productsToEdit);
  };


  switchProductStatus(productId: number, newStatus: string) {
    const productsToEdit = this.products.getValue();

      for (let product of productsToEdit) {
          if (product.id === productId +1) {
            product.status = newStatus;
            this.products.next(productsToEdit);
            break;

          }
      }
  }
  getProductById(productId: number): Promise<Product>{
  return new Promise((resolve, reject) => {
    const products = this.products.getValue();

    for(let product of products) {
      if(product.id === productId){

        resolve(product);
        break;
      }
    }

  });
}}

