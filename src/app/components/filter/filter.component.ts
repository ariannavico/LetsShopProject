import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

  offer:any 
  search:string = ''

  

  @Output() showOffers = new EventEmitter()
  @Output() searchText = new EventEmitter()
  ngOnInit(): void {
  }

  showOfferOnly(){

    if(this.offer){
      this.showOffers.emit(false)
    }else{
      this.showOffers.emit(true)
    }
  }
  searching(e:any){
    this.searchText.emit(e.toLowerCase())
    console.log(e, 'tasto');
  }

}
