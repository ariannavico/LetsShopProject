import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from 'src/app/sharedService';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {


  constructor(public SharedService: SharedService, private route: ActivatedRoute) { }


  showOffersOnly: boolean = false
  activeParam: string = "";
  currentCategory: string = ''
  dataFiltered: any = []
  findText: string = ''
  featuredData: any = this.SharedService.data = this.SharedService.dataOriginal.filter((e: any) => {
    return e.isGreen === false
  })
  greenData = this.SharedService.data = this.SharedService.dataOriginal.filter((e: any) => {
    return e.isGreen === true
  })
  currentCategoryData = this.SharedService.data = this.SharedService.dataOriginal.filter((e: any) => {
    return e.isGreen === true
  })

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.activeParam = params.cat;
      console.log('param: ', this.activeParam);
      this.AfterViewInit(this.activeParam)
    });
  }

  AfterViewInit(categoryName: string) {
    if (this.activeParam === 'Featured Products') {
      this.SharedService.data = this.featuredData
    }
    else if (this.activeParam === 'Green Products') {
      this.SharedService.data = this.greenData
    }
    else if (this.activeParam === 'All') {
      this.SharedService.data = this.SharedService.dataOriginal
    } else {
      this.SharedService.data = this.SharedService.dataOriginal.filter((e: any) => {
        return e.category === categoryName
      })
    }
    this.SharedService.getCategory()
  }

  filteringNoText(data:any){
    if (this.currentCategory === 'All' || this.currentCategory === '') {
      if (this.showOffersOnly === false) {
        this.SharedService.data = data
      } else {
        this.SharedService.data = data.filter((e: any) => {
          return e.isOffer === true
        })
      }
    } else {
      if (this.showOffersOnly === false) {
        this.SharedService.data = data.filter((e: any) => {
          return e.category === this.currentCategory
        })
      } else {
        this.SharedService.data = data.filter((e: any) => {
          return e.category === this.currentCategory
        }).filter((e: any) => {
          return e.isOffer === true
        })
      }
    }
  }
  filteringWithText(data:any){
    if (this.currentCategory === 'All' || this.currentCategory === '') {
      if (this.showOffersOnly === false) {
        this.SharedService.data = data.filter((e: any) => {
          return e.name.toLowerCase().indexOf(this.findText) > -1
        })
      } else {
        this.SharedService.data = data.filter((e: any) => {
          return e.isOffer === true
        }).filter((e: any) => {
          return e.name.toLowerCase().indexOf(this.findText) > -1
        })
      }
    } else {
      if (this.showOffersOnly === false) {
        this.SharedService.data = data.filter((p: any) => {
          return p.category === this.currentCategory
        }).filter((e: any) => {
          return e.name.toLowerCase().indexOf(this.findText) > -1
        })
      } else {
        this.SharedService.data = data.filter((p: any) => {
          return p.category === this.currentCategory
        }).filter((e: any) => {
          return e.name.toLowerCase().indexOf(this.findText) > -1
        }).filter((o: any) => {
          return o.isOffer === true
        })
      }
    }
  }

  filterByCategory(c: string) {

    this.currentCategory = c
    if (this.findText === '') {
      if (this.activeParam === 'Green Products') {
        this.filteringNoText(this.greenData)
      } else if (this.activeParam === 'Featured Products') {
        this.filteringNoText(this.featuredData)
      }
    } else {
      if (this.activeParam === 'Green Products') {
        this.filteringWithText(this.greenData)
      } else if (this.activeParam === 'Featured Products') {
        this.filteringWithText(this.featuredData)
        console.log('enter');
        console.log(this.findText);
      }
    }
  }


  showOffers(offer: any) {
    this.showOffersOnly = offer
    console.log(this.showOffersOnly, 'offernly');
    this.filterByCategory(this.currentCategory)
    this.offerFilter()
  }


  offerFilter() {
    if (this.activeParam === 'Featured Products' || this.activeParam === 'Green Products') {
      this.filterByCategory(this.currentCategory)
    }
    else if (this.activeParam === 'All') {
      if (this.findText === '') {
        if (this.showOffersOnly === false) {
          this.SharedService.data = this.SharedService.dataOriginal
        } else {
          this.SharedService.data = this.SharedService.dataOriginal.filter((e: any) => {
            return e.isOffer === true
          })
        }
      } else {
        if (this.showOffersOnly === false) {
          this.SharedService.data = this.SharedService.dataOriginal.filter((e: any) => {
            return e.name.toLowerCase().indexOf(this.findText) > -1
          })
        } else {
          this.SharedService.data = this.SharedService.dataOriginal.filter((e: any) => {
            return e.isOffer === true
          }).filter((e: any) => {
            return e.name.toLowerCase().indexOf(this.findText) > -1
          })
        }
      }
    } else if (this.activeParam !== 'Featured Products' && this.activeParam !== 'Green Products' && this.activeParam !== 'All') {
      if (this.findText === '') {
        if (this.showOffersOnly === false) {
          this.SharedService.data = this.SharedService.dataOriginal.filter((e: any) => {
            return e.category === this.activeParam
          })
        } else {
          this.SharedService.data = this.SharedService.dataOriginal.filter((e: any) => {
            return e.category === this.activeParam
          }).filter((e: any) => {
            return e.isOffer === true
          })
        }
      } else {
        if (this.showOffersOnly === false) {
          this.SharedService.data = this.SharedService.dataOriginal.filter((e: any) => {
            return e.category === this.activeParam
          }).filter((e: any) => {
            return e.name.toLowerCase().indexOf(this.findText) > -1
          })
        } else {
          this.SharedService.data = this.SharedService.dataOriginal.filter((e: any) => {
            return e.category === this.activeParam
          }).filter((e: any) => {
            return e.isOffer === true
          }).filter((e: any) => {
            return e.name.toLowerCase().indexOf(this.findText) > -1
          })
        }
      }

    }
  }
  showSearchText(T: string) {
    this.getDatiSearch(T)
  }

  getDatiSearch(text: any) {
    this.findText = text
    if (text === '') {
      if (this.currentCategory === 'All' || this.currentCategory === '') {
        if (this.showOffersOnly === false) {
          this.AfterViewInit(this.activeParam)
        }
        else {
          this.filterByCategory(this.currentCategory)
          this.offerFilter()
        }
      } else {
        this.filterByCategory(this.currentCategory)
      }
    } else {
      this.SharedService.data = this.SharedService.data.filter((e: any) => {
        return e.name.toLowerCase().indexOf(text) > -1
      })
      this.SharedService.getCategory()
    }
  }

}
