import { Component } from '@angular/core';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrl: './meet.component.css'
})
export class MeetComponent {
  phoneNumber: string= '';
  login() {
    console.log("phone number")
  }

}