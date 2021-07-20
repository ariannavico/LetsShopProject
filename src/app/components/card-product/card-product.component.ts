import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/sharedService';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  constructor(public SharedService : SharedService) { }
  @Input() product:any = {}
  @Input() active:string = ''

  ngOnInit(): void {
   
  }

}
