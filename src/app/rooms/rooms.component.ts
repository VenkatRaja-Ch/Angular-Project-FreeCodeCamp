import { Component } from '@angular/core';
import { Rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = "Venky's Hotel";
  hideRooms = false;
  numberOfRooms = 10;

  rooms : Rooms = {
    availableRooms : 5,
    bookedRooms : 10,
    totalRooms : 15
  }

  constructor() {}
  ngOnInit() {}

  toggleRooms() {
    this.hideRooms = !this.hideRooms;
  }
}
