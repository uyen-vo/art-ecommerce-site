import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test-ecommerce-site';

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('snipcart-overwrite');
  }
}
