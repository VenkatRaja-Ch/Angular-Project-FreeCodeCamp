import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HotelInventoryApplication';

  role = 'admin';
  // role = 'user';
  // role = 'guest';
}
