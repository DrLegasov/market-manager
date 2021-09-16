import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../Models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() name: string;
  @Input() submitLabel : string;
  @Input() productToEdit: Product | undefined;

  @Output() formSubmitted: EventEmitter<Product>;

productForm: FormGroup;

product: Product;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Product>();
  }

  ngOnInit(): void {
    this.initForm();
    if(this.productToEdit) {
      this.product = this.productToEdit
    } else {
      this.product = new Product('', 'Disponible');
    }

  }
  onSubmitProductForm() {

    if(this.productForm.valid) {
      this.formSubmitted.emit(this.product);
    }
  }
  private initForm() {
    this.productForm = this.fb.group({
      name: new FormControl(null,[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      status: new FormControl(null),
    })
  }

}
