import {Component,  Input,  OnChanges,  OnInit} from '@angular/core';
import { MarketService } from '../services/products/market.service';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() id: number;
  @Input() name: string;
  @Input() status: string;

  nextStatus: string;

  constructor(private marketService: MarketService) {

  }
  ngOnInit(): void {
  }
  ngOnChanges() {

    this.setNextStatus();
  }

  onClickSwitchStatus() {
    this.marketService.switchProductStatus(this.id, this.nextStatus)
  }
  onClickDeleteProduct() {
    this.marketService.deleteProduct(this.id);
  }
  private setNextStatus(){
    if (this.status === 'Disponible') {
      this.nextStatus = 'Non Disponible'
    } else {
      this.nextStatus = 'Disponible';
    }
  }
}
