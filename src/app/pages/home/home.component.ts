import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/sharedService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public SharedService: SharedService) { }


  ngOnInit(): void {
    this.SharedService.getDati()
  }

  showOffers(offer: any) {
    if (!offer) {
      this.SharedService.getDati()
    } else {
      this.getDatiOffers()
    }
  }


  getDatiOffers() {
    this.SharedService.data = this.SharedService.data.filter((e: any) => {
      return e.isOffer === true
    })
    this.SharedService.getCategory()

  }

  showSearchText(text: string) {
    if (text === '') {
      this.SharedService.data = this.SharedService.dataOriginal
    } else {
      this.SharedService.data = this.SharedService.dataOriginal.filter((e: any) => {
        return e.name.toLowerCase().indexOf(text) > -1
      })
      this.SharedService.getCategory()
    }
  }
/*
  getDatiSearch(text: any) {

  } */
}
