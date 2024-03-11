import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../app/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'graficosGabiAfonso';

  apiUrl: string | undefined;


  constructor() {
    this.apiUrl = environment.apiUrl;
    console.log(this.apiUrl);
  }

}
