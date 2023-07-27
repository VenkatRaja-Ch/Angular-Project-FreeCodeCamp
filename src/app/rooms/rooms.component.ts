import { Component } from '@angular/core';
import { Rooms, RoomList } from './rooms';

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

  roomList : RoomList[] = [
    {
      roomNumber : 101,
      roomType : 'Single',
      roomAmenities : 'TV, AC, WiFi',
      roomPhoto : '',
      roomPrice : 2000,
      roomCheckInTime : new Date('2022-10-10T10:00:00'),
      roomCheckOutTime : new Date('2022-10-10T12:00:00')
    },
    {
      roomNumber : 102,
      roomType : 'Double',
      roomAmenities : 'TV, AC, WiFi',
      roomPhoto : '',
      roomPrice : 1500,
      roomCheckInTime : new Date('2023-10-10T10:00:00'),
      roomCheckOutTime : new Date('2023-10-10T12:00:00')
    },
    {
      roomNumber : 103,
      roomType : 'Triple',
      roomAmenities : 'TV, AC, WiFi',
      roomPhoto : '',
      roomPrice : 1000,
      roomCheckInTime : new Date('2024-10-10T10:00:00'),
      roomCheckOutTime : new Date('2024-10-10T12:00:00')
    },
    {
      roomNumber : 104,
      roomType : 'Single',
      roomAmenities : 'TV, AC, WiFi',
      roomPhoto : '',
      roomPrice : 2000,
      roomCheckInTime : new Date('2025-10-10T10:00:00'),
      roomCheckOutTime : new Date('2025-10-10T12:00:00')
    },
  ];

  constructor() {}
  ngOnInit() {}

  toggleRooms() {
    this.hideRooms = !this.hideRooms;
  }
}
