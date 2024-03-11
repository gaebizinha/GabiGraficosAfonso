import { Component } from '@angular/core';
import { ChartsComponent } from '../../charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [ChartsComponent, NgApexchartsModule],
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.css'
})
export class BarchartComponent {

}
