import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  numCart = 0;

  ngOnInit(): void {
  }

  onActivate(event) {
    window.scroll(0, 0);
    this.numCart = Number(document.getElementsByClassName('snipcart-items-count')[0].textContent);
  }
}
