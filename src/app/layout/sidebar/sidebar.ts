import {Component} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {CommonModule} from '@angular/common';
import {ChartData, ChartType} from 'chart.js';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone: true
})
export class Sidebar {
  colors = ["#229103", "#b17011", "#fe3434"];

  pieChartType: ChartType = 'pie';
  pieChartData: ChartData<'pie'> = {
    labels: ['آنلاین', 'آفلاین', 'هشدار'],
    datasets: [
      {data: [500, 350, 150], label: "دستگاه", backgroundColor: this.colors},

    ],

  };
  pieChartOptions = {
    plugins: {
      legend: {
        display: true,
        font: {
          size: 45,
          family: 'Vazirmatn',
        }

      }
    }
  };
}
