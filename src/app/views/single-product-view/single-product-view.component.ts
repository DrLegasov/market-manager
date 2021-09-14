import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Models/product.model';
import { MarketService } from '../../services/products/market.service';

@Component({
  selector: 'app-single-book-view',
  templateUrl: './single-product-view.component.html',
  styleUrls: ['./single-product-view.component.css']
})
export class SingleProductViewComponent implements OnInit {

product: Product;

  constructor(private route: ActivatedRoute, private marketService : MarketService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.marketService.getProductById(+id).then((productFound: Product) => {
      this.product = productFound;
    }
    )
  }
}
