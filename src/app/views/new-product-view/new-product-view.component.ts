import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../Models/product.model';
import { MarketService } from 'src/app/services/products/market.service';

@Component({
  selector: 'app-new-product-view',
  templateUrl: './new-product-view.component.html',
  styleUrls: ['./new-product-view.component.css']
})
export class NewProductViewComponent implements OnInit {

  constructor(private marketService: MarketService, private router: Router) { }

  ngOnInit(): void {
  }
  askToAddProduct(productToAdd: Product) {
    this.marketService.addProduct(productToAdd).then(() => {
      this.router.navigateByUrl('home')
    })
  }
}
