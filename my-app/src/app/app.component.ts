import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  originColor = 'grey';

  colors = ["blue", "red", "green","pink", "black", ];

  colorChange(newcolor: string): void {
    this.originColor = newcolor;
  }
}
