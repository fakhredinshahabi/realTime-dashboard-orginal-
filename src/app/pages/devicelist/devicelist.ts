import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerService } from '../../_services/server-service';
import { _device, _getDeviceMessage } from '../../-interfaces/_device';
@Component({
  selector: 'app-devicelist',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './devicelist.html',
  styleUrl: './devicelist.scss',
})
export class Devicelist {
  constructor(private http: ServerService) {}
  listOfDevice: _device[] = [];

  ngOnInit() {
    this.http.getDeviseObs().subscribe({
      next: (res: any) => {
        console.log(typeof res);
      },
    });
    this.http.sendMessage({
      type: 'AUTH',
      token: sessionStorage.getItem('token'),
    });
  }
}
