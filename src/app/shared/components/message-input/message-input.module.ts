import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageInputComponent } from './message-input.component';



@NgModule({
  declarations: [MessageInputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MessageInputComponent
  ]
})
export class MessageInputModule { }
