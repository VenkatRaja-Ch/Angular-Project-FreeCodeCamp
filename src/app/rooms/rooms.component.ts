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
      number : 101,
      type : 'Single',
      amenities : 'TV, AC, WiFi',
      photo : '',
      price : 2000,
      checkInTime : new Date('2022-10-10T10:00:00'),
      checkOutTime : new Date('2022-10-10T12:00:00')
    },
    {
      number : 102,
      type : 'Double',
      amenities : 'TV, AC, WiFi',
      photo : '',
      price : 1500,
      checkInTime : new Date('2023-10-10T10:00:00'),
      checkOutTime : new Date('2023-10-10T12:00:00')
    },
    {
      number : 103,
      type : 'Triple',
      amenities : 'TV, AC, WiFi',
      photo : '',
      price : 1000,
      checkInTime : new Date('2024-10-10T10:00:00'),
      checkOutTime : new Date('2024-10-10T12:00:00')
    },
    {
      number : 104,
      type : 'Single',
      amenities : 'TV, AC, WiFi',
      photo : '',
      price : 2000,
      checkInTime : new Date('2025-10-10T10:00:00'),
      checkOutTime : new Date('2025-10-10T12:00:00')
    },
  ];

  constructor() {}
  ngOnInit() {}

  toggleRooms() {
    this.hideRooms = !this.hideRooms;
  }
}
