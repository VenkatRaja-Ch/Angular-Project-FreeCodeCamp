import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit{

  @Input() rooms : RoomList[] = [];

  @Output() selectedRooms = new EventEmitter<RoomList>();

  constructor() {}

  ngOnInit() {}

  selectRoom(room : RoomList) {
    this.selectedRooms.emit(room);
  }
}
