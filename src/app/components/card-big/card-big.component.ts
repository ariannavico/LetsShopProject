import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.scss']
})
export class CardBigComponent implements OnInit {

  constructor() { }

  @Input() ProductName = ''
  ngOnInit(): void {
  }

}
