import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.scss']
})
export class CardSmallComponent implements OnInit {

  constructor( ) { }

  @Input() categoryName:string = ''

  ngOnInit(): void {
  }

}
