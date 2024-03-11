import { Component, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
} from 'ng-apexcharts';
import { environment } from '../../environment';
import { ApiconnectService } from '../../services/apiconnect.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  apiUrl: string | undefined

  constructor(private apiConnectService: ApiconnectService) {
    this.apiUrl = environment.apiUrl;

    this.chartOptions = {
      series:
        [
          {
            name: 'ansiedade generalizada',
            data: [96, 41, 35, 51, 49, 62, 69, 91, 21],
            color: '#CC00FF',
          },
          {
            name: 'transtorno misto ansioso e depressivo',
            data: [12, 32, 78, 54, 98, 43, 56, 76, 100],
            color: '#6D6AFF',
          },
        ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      grid: {
        row: {
          colors: ['#F3F3F3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
  }



}
