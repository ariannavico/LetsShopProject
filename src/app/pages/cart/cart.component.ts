import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/sharedService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public SharedService : SharedService) { }

  

  ngOnInit(): void {
    this.SharedService.getDati()
  }

  leaveAtDoorStep(e:boolean){
    this.SharedService.doorStep = e
  }
}
