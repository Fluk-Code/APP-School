import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-lite',
  templateUrl: './header-lite.component.html',
  styleUrls: ['./header-lite.component.css']
})
export class HeaderLiteComponent implements OnInit {

  @Input()
  titulo: string;

  @Input()
  routerBack: string;

  constructor() { }

  ngOnInit(): void {
  }

}
