import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';
import { DevicesService } from '../../services/devices-service';
import { _device } from '../../-interfaces/_device';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone: true,
})
export class Sidebar {
  listOfDevice: _device[] | undefined = [];
  onlineDeviceNumber: number = 0;
  offlineDeviceNumber: number = 0;
  warningDeviceNumber: number = 0;
  labels: string[] = ['آنلاین', 'آفلاین', 'هشدار'];
  colors: string[] = ['#229103', '#b17011', '#fe3434'];

  constructor(private devicesService: DevicesService) {}

  ngOnInit() {
    this.devicesService.devices$.subscribe((devices) => {
      this.listOfDevice = devices;
      this.onlineDeviceNumber = this.listOfDevice.filter(
        (device) => device.status == 'online',
      ).length;
      this.offlineDeviceNumber = this.listOfDevice.filter(
        (device) => device.status == 'offline',
      ).length;
      this.warningDeviceNumber = this.listOfDevice.filter(
        (device) => device.status == 'warning',
      ).length;
      // const chartForStatus = new Chart("statusChart", {
      //   type: "pie",
      //   data: {
      //     labels: this.labels,
      //     datasets: [{
      //       data: [this.onlineDeviceNumber, this.offlineDeviceNumber, this.warningDeviceNumber],
      //       backgroundColor: this.colors
      //     }
      //     ]
      //   },

      // });
    });
  }
  ngAfterViewInit() {}
}
