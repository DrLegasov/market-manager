import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from 'src/app/Models/product.model';
import {MarketService} from 'src/app/services/products/market.service';

@Component({
  selector: 'app-edit-product-view',
  templateUrl: './edit-product-view.component.html',
  styleUrls: ['./edit-product-view.component.css']
})
export class EditProductViewComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private marketService: MarketService,private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.marketService.getProductById(+id).then(
      (productFound: Product) => this.product = productFound);
  }

  askToEditProduct(editedProduct: Product) {
    console.log(this.product);

    this.marketService.editProduct(editedProduct).then(() => {
      this.router.navigate(['/market', editedProduct.id])
    })
  }

}
