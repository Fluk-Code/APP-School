import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  @Input()
  message: string;

  constructor() {
    this.message = ''
  }

  ngOnInit(): void {
  }

}
