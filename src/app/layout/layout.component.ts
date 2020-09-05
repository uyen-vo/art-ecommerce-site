import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() numCart;
  
  constructor() {
  }

  ngOnInit(): void {
    // let prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    //   var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.getElementById('mobile-nav').style.top = "50px";
    //   } else {
    //     document.getElementById('mobile-nav').style.top = "0px";
    //   }
    //   prevScrollpos = currentScrollPos;
    // }
  }

}