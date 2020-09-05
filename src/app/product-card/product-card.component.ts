import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  @Input() product: Product;
  @Input() type: 'horizontal' | 'vertical' = 'vertical';
  @Input() showBuyButton: boolean;
  
  // quantity = 1;
  // size = '5x7';


  ngOnInit(): void {
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.materialboxed');
    //   var instances = M.Materialbox.init(elems);
    // });
  
  }

  // onSizeSelected(value: string): void {
  //   this.size = value;
  // }

  // onQuantitySelected(value: number): void {
  //   this.quantity = value;
  // }


}