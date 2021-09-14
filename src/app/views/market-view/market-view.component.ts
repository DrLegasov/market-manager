import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../services/products/market.service';
import { Product } from '../../Models/product.model';

@Component({
  selector: 'app-market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.css']
})
export class MarketViewComponent implements OnInit {
  products: Product[];

  constructor( private marketService: MarketService) { }

  ngOnInit(): void {
    this.marketService
      .products
      .subscribe(
        (products: Array<Product>) => {this.products = products}
    );
  }
  allAvailable() {
    this.marketService.switchAllProductsStatus('Disponible');
  }
  allUnAvailable() {
    this.marketService.switchAllProductsStatus('Non Disponible');
  }

}
