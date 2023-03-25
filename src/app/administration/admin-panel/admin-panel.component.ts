import { NavigationEnd, Router } from '@angular/router';
import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit{
  constructor(private router:Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(): void {

  }



}
