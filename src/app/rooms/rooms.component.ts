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
  numberOfRooms = 4;
  hideShowButtonName = 'HIDE / SHOW ROOMS';

  title = 'Rooms List';
  selectedRoom! : RoomList;

  rooms : Rooms = {
    availableRooms : 4,
    bookedRooms : 0,
    totalRooms : 4
  }

  roomList : RoomList[] =  [];
  
  constructor() {}

  ngOnInit() {
    
    this.roomList = [
      {
        number : 101,
        type : 'Single',
        amenities : 'TV, AC, WiFi',
        photo : '',
        price : 2000,
        checkInTime : new Date('2022-10-10T10:00:00'),
        checkOutTime : new Date('2022-10-10T12:00:00'),
        rating : 4.7
      },
      {
        number : 102,
        type : 'Double',
        amenities : 'TV, AC, WiFi',
        photo : '',
        price : 1500,
        checkInTime : new Date('2023-10-10T10:00:00'),
        checkOutTime : new Date('2023-10-10T12:00:00'),
        rating : 3.6
      },
      {
        number : 103,
        type : 'Triple',
        amenities : 'TV, AC, WiFi',
        photo : '',
        price : 1000,
        checkInTime : new Date('2024-10-10T10:00:00'),
        checkOutTime : new Date('2024-10-10T12:00:00'),
        rating : 2.4
      },
      {
        number : 104,
        type : 'Single',
        amenities : 'TV, AC, WiFi',
        photo : '',
        price : 2000,
        checkInTime : new Date('2025-10-10T10:00:00'),
        checkOutTime : new Date('2025-10-10T12:00:00'),
        rating : 5.0
      }
    ];
  }

  toggleRooms() {
    this.hideRooms = !this.hideRooms;
    this.title = "List of Available Rooms";
  }

  selectRoom(room : RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room : RoomList = {
      number : 105,
      type : 'Triple',
      amenities : 'TV, AC, WiFi, Fridge, Kitchen, Balcony',
      photo : '',
      price : 4000,
      checkInTime : new Date('2026-10-10T10:00:00'),
      checkOutTime : new Date('2026-10-10T12:00:00'),
      rating : 4.9
    }

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
