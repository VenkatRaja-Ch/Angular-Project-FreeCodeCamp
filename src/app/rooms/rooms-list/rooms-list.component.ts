import { OnChanges, Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy, SimpleChange, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RoomsListComponent implements OnInit, OnChanges {

  @Input() rooms : RoomList[] = [];
  @Input() title : string = '';

  @Output() selectedRooms = new EventEmitter<RoomList>();

  constructor() {}

  // implementing ngOnChanges method
  ngOnChanges(changes: SimpleChanges): void {
    
    console.log(changes);
    if(changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit() {}

  selectRoom(room : RoomList) {
    this.selectedRooms.emit(room);
  }
}
