import { Component, Input, OnInit } from '@angular/core';
import { MarketService } from '../services/products/market.service';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productName: string;
  @Input() productStatus: string;
  @Input() index: number;


  constructor(private marketService: MarketService) { }

  ngOnInit(): void {
  }

  onSwitchStatus(i: number, newStatus: string) {
    this.marketService.switchProductStatus(i, newStatus);
  }
}
