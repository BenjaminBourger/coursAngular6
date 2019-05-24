import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paysage = '../assets/images/landscape-4205109_1280.jpg';

  constructor() { }

  ngOnInit() {
  }

}
