import { Component } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crash-course-mirza';

  handleEvent () {
    console.log("Button Clicked", this.title);

  }
}
