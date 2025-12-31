import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { _device } from '../../-interfaces/_device';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone: true,
})
export class Sidebar {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {}
}
