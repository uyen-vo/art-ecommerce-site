import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

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
  
  // gallery
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
 
  // custom data for product
  quantity = 1;
  size = '5x7';


  ngOnInit(): void {
    // initialize gallery
    this.galleryOptions = [

      
        // { "imageSize": "contain" },
        // { "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
        // { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
        

      {
          // imageSize: 'contain',
          width: '500px',
          height: '500px',
          imageAnimation: NgxGalleryAnimation.Slide,
          thumbnails: false,
          imageSwipe: true,
          previewCloseOnClick: true,
          previewCloseOnEsc: true,
          previewKeyboardNavigation: true,
          imageBullets: true,
          arrowPrevIcon: 'fa fa-angle-left',
          arrowNextIcon: 'fa fa-angle-right',
          closeIcon: 'fa fa-expand-arrows-alt'
      },
      {
          breakpoint: 800,
          width: '300px',
          height: '300px',
          imageSwipe: true

      },
      {
          breakpoint: 300,
          width: '100px',
          height: '100px',
          imageSwipe: true
      }
  ];

    this.galleryImages = [
      {
        small: 'assets/ocean-watercolor-landscape-painting.jpg',
        medium: 'assets/abstract-watercolor-landscape-painting.jpg',
        big: 'assets/aurora-watercolor-landscape-painting.jpg'
    },{
      small: 'assets/ocean-watercolor-landscape-painting.jpg',
      medium: 'assets/abstract-watercolor-landscape-painting.jpg',
      big: 'assets/aurora-watercolor-landscape-painting.jpg'
  },
      {
        small: 'assets/ocean-watercolor-landscape-painting.jpg',
        medium: 'assets/abstract-watercolor-landscape-painting.jpg',
        big: 'assets/aurora-watercolor-landscape-painting.jpg'
      }
  ];

}

  onSizeSelected(value: string): void {
    console.log(value);
    this.size = value;
  }

  onQuantitySelected(value: number): void {
    console.log(value);
    this.quantity = value;
  }

  incrementQuantity(inc: boolean): void {
    if (inc) {
      this.quantity++;
    } else {
      this.quantity--;
    }
  }


}